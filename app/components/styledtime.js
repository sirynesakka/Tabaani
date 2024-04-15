import { useForm, Controller } from "react-hook-form";

import TimeInput from "react-time-picker-input";

const Styledtime = ({
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
        name="startTime"
        control={control}
        render={({ field }) => (
          <div className="timeInputWrapper">
            <TimeInput
              {...field}
              value={field?.value || "00:00"}
              // hour12Format
              eachInputDropdown
              // manuallyDisplayDropdown
              // disabled={true}
            />
          </div>
        )}
      />
      {errors?.startTime && <p>{errors?.startTime?.message}</p>}
    </div>
  );
};

export default Styledtime;
