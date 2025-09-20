import { useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type TDebouncedProps = {
  searchQuery: string;
  delay: number;
};

// when write something in the search box then it shows the result after a while of time
// it will reduce the number of api calls. because when we write something in the search box
// it will wait for the delay time and then it will show the result
// if we write something again in the search box then it will wait for the delay time again
// and then it will show the result
// this is called debouncing
export const useDebounced = ({ searchQuery, delay }: TDebouncedProps) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(searchQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchQuery);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, delay]);

  return debouncedValue;
};
