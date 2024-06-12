import "./FormField.scss";

function FormField({
  htmlFor,
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
        htmlFor={htmlFor}
        className="formfield__textfield"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FormField;


