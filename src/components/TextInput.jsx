import { useField } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="relative z-0 group border-b-2 border-primary flex items-center">
        <label
          htmlFor={props.id || props.name}
          className={`transition absolute -z-10 px-1 top-3 left-7 text-gray font-bold group-focus-within:-translate-y-7 caret-primary group-focus-within:text-xs group-focus-within:text-primary ${
            meta.value ? "-translate-y-7 text-gray text-xs" : ""
          }`}
        >
          {label}
        </label>
        {props.icon}
        <input
          autoFocus
          autoComplete="off"
          {...field}
          {...props}
          className={`w-full mx-auto font-semibold h-12 px-3 bg-inherit outline-none caret-primary autofill:bg-primary`}
        />
        {field.value && props.button}
      </div>
      {meta.touched && meta.error ? (
        <p className="text-error text-left mt-2">{meta.error}</p>
      ) : null}
    </>
  );
};

export default TextInput;
