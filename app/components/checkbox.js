"use client"
import React, { forwardRef, useEffect } from "react";
import { useController } from "react-hook-form";

const Checkbox = forwardRef(
  (
    { label, name, value, onChange, defaultChecked, control, ...rest },
    forwardedRef
  ) => {
    const { field } = useController({ name, control });

    useEffect(() => {
      onChange?.(field.checked);
    }, [field.checked, onChange]);

    return (
      <label style={{ cursor: "pointer" }}>
        <input
          style={{
            position: "absolute",
            opacity: 0,
            pointerEvents: "none",
            zIndex: -1,
          }}
          ref={forwardedRef}
          type="checkbox"
          name={name}
          defaultChecked={defaultChecked}
          {...field}
          {...rest}
        />
        [{field.checked ? "X" : " "}] {label}
      </label>
    );
  }
);

export default Checkbox;
