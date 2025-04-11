// Import React Hooks
import { useEffect } from 'react';

// Import useAPI Hook
import useAPI from '../../hooks/useAPI';

// Import API URL Config
import { API_URL } from '../../config/API_URL';

// Import LastServicesItem Components
import LastServicesItem from '../LastServicesItem';

// Import Typography Components
import { H2WhiteBlue } from '../Typography';

// Import Last Services Data
import { LAST_SERVICES } from '../../constants/HOME_PAGE_DATA';

// Import Style css
import './style.css';

const LastServices = () => {
  // useAPI Hook.
  const { get, data } = useAPI(`${API_URL}/services`);

  // useEffect Hook.
  useEffect(() => {
    // Get API.
    get();
  }, []);

  return (
    // Start Last Services
    <section id='serv'>
      <div className='container'>
        <H2WhiteBlue>{LAST_SERVICES.title}</H2WhiteBlue>
        {/** Start Last Services Row */}
        <div className='row gap-4 gap-md-0 justify-content-center'>
          {
            // Start Last Services Item
            data.map(ServiceItem => {
              return (
                <LastServicesItem
                  key={ServiceItem.id}
                  type={ServiceItem.type}
                  title={ServiceItem.title}
                  description={ServiceItem.description}
                  time={ServiceItem.time}
                  RoutNavigate={ServiceItem.route}
                />
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

export default LastServices;
