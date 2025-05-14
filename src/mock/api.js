export const loginApi = async (username, password) => {
  let result;
  try {
    const { data } = await Api.get(
      `auth?username=${username}&password=${password}`
    );
    if (data.length > 0) {
      const { id } = data[0];
      const userData = await Api.get(`users?id=${id}`);
      result = {
        status: 'SUCCESS',
        data: userData.data[0],
        error: ''
      };
    } else {
      result = {
        status: 'FAILED',
        data: null,
        error: 'wrong user name or password'
      };
    }
    return result;
  } catch (error) {
    console.log('error');
    result = {
      status: 'FAILED',
      data: null,
      error: 'wrong user name or password'
    };
    return result;
  }
};
