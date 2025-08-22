// reusable input component
// by  render={({ field, fieldState: { error } } in controller dictructure all fields and received by the text fiel. skip register and add name. 
// name is the key that stores the input value in React Hook Form. Without name, the form won’t know which field the value belongs to.

import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
};

const Rinput = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth,
  sx,
  required,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          label={label}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          placeholder={label}
          required={required}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default Rinput;
