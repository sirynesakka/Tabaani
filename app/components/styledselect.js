import { css } from '@emotion/css';

const Styledselect = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    backgroundColor: "white",
    border: state.isFocused ? "1px solid #ffffff" : "1px solid #D1D5DB",
    color: "#1f2937",
    fontSize: "0.875rem", // text-sm equivalent
    borderRadius: "0.375rem", // rounded-lg equivalent
    outline: "none", // Remove default focus outline
    "&:hover": {
      borderColor: "#000",
    },
    "&:focus": {
      borderColor: "#000",
      boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)", // Equivalent to Tailwind's focus ring color and size
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#edf2f7" : "white",
    color: "black",
    fontFamily: 'meduim',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "black",
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: "2px",
    borderRadius: "6px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    fontWeight: "200",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#edf2f7",
    "&:hover": {
      color: "#edf2f7",
    },
  }),
};

export default Styledselect;
