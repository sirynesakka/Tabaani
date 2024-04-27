import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Styledselect from "./styledselect";

const StyledSelect = ({
  name,
  control,
  defaultValue,
  options,
  required,
  message,
  errors,
  value,
  onChange
}) => {
  return (
    <div className="relative">
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        rules={{
          required: required && message, // Add required rule
          pattern: {
            message: errors // Custom error message for pattern
          }
        }}
        render={({ field }) => (
          <Select 
            {...field}
            options={options}
            styles={Styledselect}
           
          />
        )}
      />
      {errors && (
        <p className="absolute text-red-500 text-sm bottom-0 left-0">{errors}</p>
      )}
    </div>
  );
};

export default StyledSelect;
