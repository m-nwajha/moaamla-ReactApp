import RegisterRight from '../../components/RegisterRight';
import './style.css';

const RegisterLayout = ({ children }) => {
  return (
    <div className='register_layout'>
      <div className='container'>
        <div className='card p-0'>
          <div className='card-body p-0'>
            <div className='row'>
              <RegisterRight />
              <div className='col-12 col-lg-7 px-5 py-3'>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLayout;
