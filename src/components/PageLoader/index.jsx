import { useEffect, useState } from 'react';
import './style.css';

const PageLoader = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    let setLoader = setTimeout(() => setLoad(false), 1000);
    return () => {
      clearTimeout(setLoader);
    };
  }, []);
  return (
    load && (
      <div className='loader'>
        <img
          src='/assets/images/logo.png'
          alt='loader-logo'
        />
      </div>
    )
  );
};

export default PageLoader;
