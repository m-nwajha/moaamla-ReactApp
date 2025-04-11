// Import React Router Hooks & Components
import { useNavigate } from 'react-router-dom';

// Import Typography Components
import { Body3, H5, Span1 } from '../Typography';

// Import Btn Components
import { BtnBlueSm } from '../Btns';

// Import Last Services Constants
import { LAST_SERVICES } from '../../constants/HOME_PAGE_DATA';

// Import Style css
import './style.css';

const LastServicesItem = ({ type, title, description, time, RoutNavigate }) => {
  // useNavigate Hook
  const navigate = useNavigate();

  return (
    // Start Last Services Item
    <div className='col-12 col-md-6 col-lg-4'>
      <div className='card'>
        <div className='card-body'>
          {/** Type Service */}
          <Span1 className='type__serv'>{type}</Span1>

          {/** Title Service */}
          <H5 className='card-title mb-2'>{title}</H5>

          {/** Description Service */}
          <Body3 className='card-text'>{description}</Body3>

          {/** Time Taken Approximately */}
          <Span1 className='time__serv'>{`${LAST_SERVICES.servicesItem.time} ${time}`}</Span1>

          <div className='mt-4 mb-3'>
            {/** Navigate to Your Service */}
            <BtnBlueSm
              onClick={() => {
                navigate(`dashboard/addService/${RoutNavigate}`);
              }}>
              {LAST_SERVICES.servicesItem.btnLabel}
              <i className='bi bi-arrow-left-circle me-2'></i>
            </BtnBlueSm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastServicesItem;
