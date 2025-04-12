// Import Style css
import './style.css';

/****
 * Headings *
 *****/

// Handel H1 Component
export const H1 = ({ children, className = '' }) => {
  return <h1 className={`t_h1 ${className}`}>{children}</h1>;
};

// Handel H2 Component
export const H2 = ({ children, className = '' }) => {
  return <h2 className={`t_h2 ${className}`}>{children}</h2>;
};

// Handel H3 Component
export const H3 = ({ children, className = '' }) => {
  return <h3 className={`t_h3 ${className}`}>{children}</h3>;
};

// Handel H4 Component
export const H4 = ({ children, className = '' }) => {
  return <h4 className={`t_h4 ${className}`}>{children}</h4>;
};

// Handel H5 Component
export const H5 = ({ children, className = '' }) => {
  return <h5 className={`t_h5 ${className}`}>{children}</h5>;
};

// Handel H6 Component
export const H6 = ({ children, className = '' }) => {
  return <h6 className={`t_h6 ${className}`}>{children}</h6>;
};

/****
 * Paragraphs *
 *****/

// Handel Body1 Component
export const Body1 = ({ children, className = '' }) => {
  return <p className={`t_body1 ${className}`}>{children}</p>;
};

// Handel Body2 Component
export const Body2 = ({ children, className = '' }) => {
  return <p className={`t_body2 ${className}`}>{children}</p>;
};

// Handel Body3 Component
export const Body3 = ({ children, className = '' }) => {
  return <p className={`t_body3 ${className}`}>{children}</p>;
};

/****
 * Span *
 *****/

// Handel Span1 Component
export const Span1 = ({ children, className = '' }) => {
  return <span className={`t_span1 ${className}`}>{children}</span>;
};

// Handel Span2 Component
export const Span2 = ({ children, className = '' }) => {
  return <span className={`t_span2 ${className}`}>{children}</span>;
};

// Handel Span3 Component
export const Span3 = ({ children, className = '' }) => {
  return <span className={`t_span3 ${className}`}>{children}</span>;
};

/****
 * Custom Typography *
 *****/

// Handel H2WhiteBlue Component
export const H2WhiteBlue = ({
  children,

  // Passing Last Word (Underline Blue Color)
  lastWord,

  className = ''
}) => {
  const arrOfText = children;
  const splitArrOfText = arrOfText.split(' ');
  const popArrOfText = splitArrOfText.pop(-1);

  return (
    <div className={`h2_white__blue ${className}`}>
      <H2>
        {splitArrOfText.map(textItem => {
          return `${textItem} `;
        })}
        <span>{popArrOfText}</span>
      </H2>
    </div>
  );
};

// Handel H2WhiteBlue Component
export const H2DarkBlue = ({
  children,

  // Passing Last Word (Underline Blue Color)
  lastWord,

  className = ''
}) => {
  const arrOfText = children;
  const splitArrOfText = arrOfText.split(' ');
  const popArrOfText = splitArrOfText.pop(-1);

  return (
    <div className={`h2_dark__blue ${className}`}>
      <H2>
        {splitArrOfText.map(textItem => {
          return `${textItem} `;
        })}
        <span>{popArrOfText}</span>
      </H2>
    </div>
  );
};


// Handel Footer H5 Component
export const FooterH5 = ({ children, className = '' }) => {
  return <H5 className={`footer_h5 ${className}`}>{children}</H5>;
};
