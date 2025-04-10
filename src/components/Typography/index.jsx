// Import Style css
import './style.css';



/****
 * Headings *
*****/

// Handel H1 Component
export const H1 = ({ children, className= '' }) => {
  return <h1 className={`t_h1 ${className}`}>{children}</h1>;
};

// Handel H1 Component
export const H2 = ({ children, className= '' }) => {
  return <h2 className={`t_h2 ${className}`}>{children}</h2>;
};


// Handel H3 Component
export const H3 = ({ children, className= '' }) => {
  return <h3 className={`t_h3 ${className}`}>{children}</h3>;
};


// Handel H4 Component
export const H4 = ({ children, className= '' }) => {
  return <h4 className={`t_h4 ${className}`}>{children}</h4>;
};


// Handel H5 Component
export const H5 = ({ children, className= '' }) => {
  return <h5 className={`t_h5 ${className}`}>{children}</h5>;
};


// Handel H6 Component
export const H6 = ({ children, className= '' }) => {
  return <h6 className={`t_h6 ${className}`}>{children}</h6>;
};


// Handel Footer H4 Component
export const FooterH4 = ({ children, className = '' }) => {
  return <h4 className={`footer_h4 ${className}`}>{children}</h4>;
}; 


/****
 * Paragraphs *
*****/

// Handel Body1 Component
export const Body1 = ({ children, className= '' }) => {
  return <p className={`t_body1 ${className}`}>{children}</p>;
};


// Handel Body2 Component
export const Body2 = ({ children, className= '' }) => {
  return <p className={`t_body2 ${className}`}>{children}</p>;
};


