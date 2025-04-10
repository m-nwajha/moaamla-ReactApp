// Import Inputs Components
import { InputHero } from '../Inputs';

// Import Btns Components
import { BtnGreen } from '../Btns';

// Import Style css
import './style.css';

const SearchHero = ({
  // Search Value Prop.
  searchVal,

  // Input On Change Prop.
  onChange,

  // On Submit Prop.
  searchServes,

  // Input Placeholder Prop.
  placeholder,

  // Btn Label Prop.
  btnTitle
}) => {
  return (
    // Start Hero Search Form
    <form
      onSubmit={searchServes}
      className='search__hero'>
      {/** Input Search */}
      <InputHero
        placeholder={placeholder}
        inputVal={searchVal}
        onChange={onChange}
      />

      {/** Btn Search */}
      <BtnGreen>{btnTitle}</BtnGreen>
    </form>
  );
};

export default SearchHero;
