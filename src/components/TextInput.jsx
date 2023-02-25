import { useField } from "formik";

import UserIcon from "../icons/UserIcon";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="relative z-0 group border-b-2 border-primary flex items-center">
      <label
        htmlFor={props.id || props.name}
        className={`transition absolute -z-10 px-1 top-3 left-7 text-gray font-bold group-focus-within:-translate-y-5 caret-primary group-focus-within:text-sm group-focus-within:text-primary ${
          meta.value ? "-translate-y-5 text-gray text-sm" : ""
        }`}
      >
        {label}
      </label>
      <UserIcon />
      <input
        {...field}
        {...props}
        className={`w-full mx-auto font-semibold h-12 px-3 bg-inherit outline-none caret-primary`}
      />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default TextInput;
