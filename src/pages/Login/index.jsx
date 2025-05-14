// import React, { useEffect, useState } from 'react';
// import { Input } from '../../components/Inputs';
// import { LOGIN_FORM } from '../../constants/REGISTER_FORM';
// import axios from 'axios';
// import { API_URL } from '../../config/API_URL';
// import useAPI from '../../hooks/useAPI';
// import { PATHS } from '../../router/paths';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const INIT_VALUE = {
//     name: '',
//     tel: '',
//     email: '',
//     password: ''
//   };
//   const [dataRegister, setDataRegister] = useState(() => INIT_VALUE);
//   const { get } = useAPI(API_URL + '/auth');
//   const handelOnChange = e => {
//     const { name, value } = e.target;
//     setDataRegister(prevState => {
//       return { ...prevState, [name]: value };
//     });
//   };

//   const handelSubmitCreateUser = async event => {
//     // event.preventDefault();
//     //  get();
//     try {
//       const res = await axios.get(
//         `${API_URL}/auth?email=${dataRegister.email}&password=${dataRegister.password}`
//       );
//       navigate('/basd');
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <form
//       className='mt-4'
//       onSubmit={handelSubmitCreateUser}>
//       {LOGIN_FORM.map(formItem => {
//         return (
//           <Input
//             key={formItem.id}
//             label={formItem.label}
//             name={formItem.name}
//             type={formItem.type}
//             col={formItem.col}
//             onChange={handelOnChange}
//             required={formItem.required}
//           />
//         );
//       })}
//       <div className='mt-5 col-12 text-start mb-4'>
//         <button type='submit'>تسجيل الدخول</button>
//       </div>
//     </form>
//   );
// };

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
      <button onClick={async ()=>{
              const res = await axios.post(
                'https://api.jsonsilo.com/dd550777-66b8-43a7-be5f-513318bc3713/auth',
                dataRegister
              );
      }}>fetch</button>
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
