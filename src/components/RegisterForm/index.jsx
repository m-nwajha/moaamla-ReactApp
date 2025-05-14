import { Input } from '../Inputs';
import { BtnBlue } from '../Btns';

const RegisterForm = ({
  onSubmit,
  inputsForm,
  onChange,
  btnLabel,
  inValid
}) => {
  return (
    <form
      className='mt-4'
      onSubmit={onSubmit}>
      {inputsForm.map(formItem => {
        return (
          <Input
            key={formItem.id}
            label={formItem.label}
            name={formItem.name}
            type={formItem.type}
            col={formItem.col}
            onChange={onChange}
            required={formItem.required}
          />
        );
      })}
      {inValid && (
        <div className='col-9 text-start'>
          <div
            className='alert alert-danger py-2 my-4 d-flex justify-content-between align-items-center'
            role='alert'
            data-aos='zoom-in'
            data-aos-delay='100'>
            <span>
              <i className='bi bi-exclamation-diamond ms-1'></i>
              يوجد خطأ في كلمة المرور أو البريد الإلكتروني .
            </span>
          </div>
        </div>
      )}
      <div className='mt-5 col-12 text-start mb-4'>
        <BtnBlue>{btnLabel}</BtnBlue>
      </div>
    </form>
  );
};

export default RegisterForm;
