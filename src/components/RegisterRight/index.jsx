import './style.css'

const RegisterRight = () => {
  return (
    <div className='col-12 col-lg-5 d-none d-lg-block register_right'>
      <div className='text-end p-3'>
        <a href='#'>
          <img
            className='register_logo'
            src='/assets/images/logo.png'
            alt=''
          />
        </a>
      </div>
      <img
        className='img-fluid'
        src='/assets/images/login-img.png'
        alt=''
      />
    </div>
  );
}

export default RegisterRight