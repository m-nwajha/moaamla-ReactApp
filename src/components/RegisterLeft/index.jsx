import { Link } from 'react-router-dom';
import RegisterForm from '../RegisterForm';
import './style.css';

const RegisterLeft = ({
  headerBtn,
  headerBtnLabel,
  headerText,
  inputsForm,
  onChange,
  onSubmit,
  btnLabel,
  inValid
}) => {
  return (
    <div className='register_left'>
      <div className='text-center d-block d-lg-none mt-4 mb-4'>
        <a href='#'>
          <img
            height='50px'
            src='/assets/images/logo.png'
            alt=''
          />
        </a>
      </div>
      <div className='d-flex flex-column flex-lg-row justify-content-end align-items-center'>
        <span className='text-dark fs-6 ms-3'>{headerText}</span>
        <Link
          to={headerBtn}
          className='btn__signup me-auto me-lg-2 mt-3 mt-lg-auto'>
          {headerBtnLabel}
        </Link>
      </div>
      <div className='form__login mt-2 mt-lg-5'>
        <h1>
          مرحبا بك مجدداً في منصة <span>معاملة.</span>
        </h1>
        <p>
          قم بتسجيل حسابك اليوم <br />
          وإحصل على خصم ٪١٥ لمعاملتك الأولى!
        </p>
        <RegisterForm
          inputsForm={inputsForm}
          onChange={onChange}
          onSubmit={onSubmit}
          btnLabel={btnLabel}
          inValid={inValid}
        />
      </div>
    </div>
  );
};

export default RegisterLeft;


