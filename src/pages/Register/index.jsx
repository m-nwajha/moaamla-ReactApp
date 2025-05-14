import { useState } from 'react';
import useAPI from '../../hooks/useAPI';
import RegisterLeft from '../../components/RegisterLeft';
import { API_URL } from '../../config/API_URL';
import { REGISTER_FORM } from '../../constants/REGISTER_FORM';
import './style.css';
import { useContextAuth } from '../../hooks/useContext';
import { ROLES } from '../../constants/ROLES';
import axios from 'axios';
import PageLoader from '../../components/PageLoader';

const INIT_VALUE = {
  name: '',
  tel: '',
  email: '',
  password: '',
  token: ''
};
const Register = () => {
  const [dataRegister, setDataRegister] = useState(() => INIT_VALUE);
  const { setRole, role, setUser, setToken } = useContextAuth();

  // handel on change input
  const handelOnChange = e => {
    const { name, value } = e.target;
    setDataRegister(prevState => {
      return {
        ...prevState,
        [name]: value,
        token: `fR1qJBRh2m${prevState.email + prevState.tel}`
      };
    });
  };

  // handel cerate user
  const handelSubmitCreateUser = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/auth`, dataRegister);
      setUser(res.data);
      setToken(res.data.token);
      setRole(ROLES.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PageLoader />
      <RegisterLeft
        headerBtn={'/register/login'}
        headerBtnLabel={'تسجيل الدخول'}
        headerText={'لديك حساب مسجل؟'}
        inputsForm={REGISTER_FORM}
        onChange={handelOnChange}
        onSubmit={handelSubmitCreateUser}
        btnLabel='سجل الآن'></RegisterLeft>
    </>
  );
};

export default Register;
