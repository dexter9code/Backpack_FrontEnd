import "./inputField.css";

const InputField = ({
  lableTitle,
  inputType,
  id,
  required,
  inputDefault,
  extraStyles,
  inputPlaceholder,
  inputRef,
  disabledType,
}) => {
  return (
    <div className={`form__group ${extraStyles}`}>
      <label className="form__label" htmlFor={id}>
        {lableTitle}
      </label>
      <input
        className="form__input"
        id={id}
        type={inputType}
        defaultValue={inputDefault}
        required={required}
        placeholder={inputPlaceholder}
        ref={inputRef}
        disabled={disabledType}
      />
    </div>
  );
};

export default InputField;
