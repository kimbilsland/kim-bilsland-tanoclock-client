import "./FormField.scss";

function FormField({
  htmlFor,
  text,
  type,
  name,
  placeholder,
  value,
  onChange,
  className,
}) {
  return (
    <div className={`formfield ${className}`}>
      <input
        className="formfield__textfield"
        type={type}
        name={name}
        placeholder={placeholder}
        // value={value}
        // onChange={onChange}
      />
    </div>
  );
}

export default FormField;
