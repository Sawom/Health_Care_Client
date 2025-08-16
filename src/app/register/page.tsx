// react hook form used
import { SubmitHandler, useForm } from "react-hook-form";

// backend form er data's format:
//  {
//   "password": "123456",
//   "patient": {
//     "email": "patient11@gmail.com",
//     "name": "Md. Fahim",
//     "contactNumber": "01111111111",
//     "address": "Dhaka, BD"
//   }
// }
// so we need to create this type data format

// at first we create *IPatientData* interface.
//  then we pass this as an object in another interface named IPatientRegisterFormData
interface IPatientData {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
}

interface IPatientRegisterFormData {
  password: string;
  patient: IPatientData;
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


  return (
    <div>
      <h1>Register Here</h1>
    </div>
  );
};

export default RegisterPage;
