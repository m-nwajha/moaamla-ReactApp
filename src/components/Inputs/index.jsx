// Import React Hooks
import { useState } from 'react';

// Import Style css
import './style.css';

/****
 * Input Hero Component *
 *****/
export const InputHero = ({
  // Input Value Prop.
  inputVal,

  // Input On Change Prop.
  onChange,

  // Input Placeholder Prop.
  placeholder
}) => {
  return (
    // Start Input Hero
    <div className='input_hero'>
      <input
        onChange={onChange}
        value={inputVal}
        type='text'
        required
        placeholder={placeholder}
      />
      <span>
        <i className='bi bi-caret-down-fill'></i>
      </span>
    </div>
  );
};

/****
 * Input Component *
 *****/
export const Input = ({
  // Label Text Prop.
  label,

  // Input Name Prop.
  name,

  // Input Type {text, number, email, password ...} Prop.
  type,

  // Input Box width col-{1 to 12} Prop.
  col,

  // Is Input required {true , false} Prop.
  required,

  // Input On Change Prop.
  onChange
}) => {
  // Show Password State
  const [showPass, setShowPass] = useState(false);

  return (
    // Start Input Div
    <div className={`mb-3 col-12 col-lg-${col}`}>
      {/** Label Tag */}
      <label
        htmlFor={name}
        className='form-label fw-bold'>
        {label}

        {/** If Input Type = Password, Render This Icon => {Show or hide password} */}
        {type === 'password' && (
          <span
            className='password_hide'
            onClick={
              // Handel On Click Set ShowPass State
              () => setShowPass(!showPass)
            }>
            {/** Show password Icon */}
            <i
              className={`bi ${
                showPass ? 'bi-eye-slash-fill' : 'bi-eye-fill'
              }`}></i>
          </span>
        )}
      </label>
      {/** If Input Type = Password */}
      {type === 'password' ? (
        <input
          type={showPass ? 'text' : 'password'}
          className='form-control'
          id={name}
          required={required}
          placeholder={label}
          name={name}
          onChange={onChange}
        />
      ) : // If Input Type = Textarea
      type === 'textarea' ? (
        <textarea
          className='form-control h-auto'
          id={name}
          required={required}
          rows='4'
          placeholder={label}
          name={name}
          onChange={onChange}></textarea>
      ) : (
        // If Input Type = Any
        <input
          type={type}
          className='form-control'
          id={name}
          name={name}
          required={required}
          placeholder={label}
          onChange={onChange}
        />
      )}
    </div>
  );
};
