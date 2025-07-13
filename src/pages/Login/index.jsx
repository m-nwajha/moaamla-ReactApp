import { useState } from 'react';
import useAPI from '../../hooks/useAPI';
import RegisterLeft from '../../components/RegisterLeft';
import { API_URL } from '../../config/API_URL';
import { LOGIN_FORM } from '../../constants/REGISTER_FORM';
import { useContextAuth } from '../../hooks/useContext';
import { ROLES } from '../../constants/ROLES';
import axios from 'axios';
import PageLoader from '../../components/PageLoader';

const INIT_VALUE = {
  email: '',
  password: ''
};
const Login = () => {
  const [dataRegister, setDataRegister] = useState(() => INIT_VALUE);
  const [inValid, setInValid] = useState(false);
  const { setRole, role, setUser, setToken } = useContextAuth();

  // handel on change input
  const handelOnChange = e => {
    const { name, value } = e.target;
    setDataRegister(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  // handel cerate user
  const handelSubmitCreateUser = async e => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `${API_URL}/auth?email=${dataRegister.email}&password=${dataRegister.password}`
      );
      if (res.data.length === 0) {
        setInValid(true);
      } else {
        setUser(res.data);
        setToken(res.data.token);
        setRole(ROLES.user);
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('role' , ROLES.user) 
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PageLoader />
      <RegisterLeft
        headerBtn={'/register'}
        headerBtnLabel={'سجل حسابك'}
        headerText={'ليس لديك حساب مسجل؟'}
        inputsForm={LOGIN_FORM}
        onChange={handelOnChange}
        onSubmit={handelSubmitCreateUser}
        btnLabel='تسجيل الدخول'
        inValid={inValid}></RegisterLeft>
    </>
  );
};

export default Login;
