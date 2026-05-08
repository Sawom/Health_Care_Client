import { authKey } from "@/constants/authkey";
import setAccessToken from "@/services/actions/setAccessToken";
import { getNewAccessToken } from "@/services/auth.services";
import { IGenericErrorResponse, ResponseSuccessType } from "@/types";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Request Interceptor
instance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Response Interceptor
instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObject: ResponseSuccessType = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  async function (error) {
    const config = error.config;

    // টোকেন রিফ্রেশ লজিক সাধারণত 401 এর জন্য হয়
    if (error?.response?.status === 401 && !config.sent) {
      config.sent = true;
      try {
        const response = await getNewAccessToken();
        const accessToken = response?.data?.accessToken;

        config.headers["Authorization"] = accessToken;
        setToLocalStorage(authKey, accessToken);
        // setAccessToken(accessToken); // যদি কোনো স্টেট থাকে

        return instance(config);
      } catch (refreshError) {
        // রিফ্রেশ টোকেন ফেইল করলে লগআউট বা অন্য লজিক
        return Promise.reject(refreshError);
      }
    } else {
      // এটিই সবচেয়ে জরুরি পরিবর্তন:
      const errorResponse: IGenericErrorResponse = {
        statusCode: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.message || "Something went wrong!!!",
        errorMessages: error?.response?.data?.message,
      };

      // অবজেক্ট রিটার্ন না করে সরাসরি Promise.reject দিতে হবে
      // এতে RTK Query বুঝতে পারবে যে এটি এরর এবং 'catch' বা 'isError' কাজ করবে
      return Promise.reject(errorResponse);
    }
  },
);

export { instance };
