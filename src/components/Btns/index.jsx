// Import Style css
import './style.css';

/****
 * Btn Green Component *
 *****/
export const BtnGreen = ({
  // Children(Label) Prop.
  children,

  // On Click Prop.
  onClick,

  // Class Name Prop.
  className = '',

  // If passing 'reset' Prop Btn Type Reset, else Btn Type Default Submit.
  reset
}) => {
  return (
    <button
      className={`btn_green ${className}`}
      onClick={onClick}
      type={reset ? 'reset' : 'submit'}>
      {children}
    </button>
  );
};




/****
 * Btn Blue Component *
 *****/
export const BtnBlue = ({
  // Children(Label) Prop.
  children,

  // On Click Prop.
  onClick,

  // Class Name Prop.
  className = '',

  // If passing 'reset' Prop Btn Type Reset, else Btn Type Default Submit.
  reset
}) => {
  return (
    <button
      className={`btn_blue ${className}`}
      onClick={onClick}
      type={reset ? 'reset' : 'submit'}>
      {children}
    </button>
  );
};

/****
 * Btn Blue Sm Component *
 *****/
export const BtnBlueSm = ({
  // Children(Label) Prop.
  children,

  // On Click Prop.
  onClick,

  // Class Name Prop.
  className = '',

  // If passing 'reset' Prop Btn Type Reset, else Btn Type Default Submit.
  reset
}) => {
  return (
    <button
      className={`btn_blue__sm ${className}`}
      onClick={onClick}
      type={reset ? 'reset' : 'submit'}>
      {children}
    </button>
  );
};