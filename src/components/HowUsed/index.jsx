// Import Typography Components.
import { Body1, H2DarkBlue } from '../Typography';

// Import HowUsedItem component.
import HowUsedItem from '../HowUsedItem';

// Import HOW_USED_PLATFORM Constants.
import { HOW_USED_PLATFORM } from '../../constants/HOME_PAGE_DATA';

// Import Style css
import './style.css';

const HowUsed = () => {
  // Render the How Used Platform component.
  return (
    <section id='about'>
      <div className='container'>
        {/** Title */}
        <H2DarkBlue>{HOW_USED_PLATFORM.title}</H2DarkBlue>

        {/** Description */}
        <Body1 className='about__text'>{HOW_USED_PLATFORM.description}</Body1>

        {/** How Used Items */}
        <div className='row gap-3 gap-md-0 justify-content-center about__items'>
          {HOW_USED_PLATFORM.Steps.map(howUsedItem => {
            return (
              <HowUsedItem
                key={howUsedItem.id}
                number={howUsedItem.id}
                title={howUsedItem.title}
                description={howUsedItem.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowUsed;
