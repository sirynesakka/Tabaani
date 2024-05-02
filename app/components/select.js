import { Controller } from "react-hook-form";
import Select from "react-select";
import Styledselect from "./styledselect";

const CostumSelect = ({
  name,
  control,
  defaultValue,
  options,
  required,
  message,
  errors,
}) => {
  return (
    <div className="relative">
      <Controller
        name={name}
        control={control}
        rules={{ required: required && message }} // Simplify rules assignment
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            styles={Styledselect}
            onChange={(selectedOption) => field.onChange(selectedOption)}
            onBlur={field.onBlur}
          />
        )}
      />
      {errors && (
        <p className="absolute text-red-500 text-sm bottom-0 left-0">{errors}</p>
      )}
    </div>
  );
};

export default CostumSelect;
