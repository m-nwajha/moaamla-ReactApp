import { useReducer, useState } from 'react';
import axios from 'axios';
const INIT_API_VAL = {
  data: [],
  iSLoading: false,
  error: null
};
const OPTION_RES = {
  first: 'first',
  catch: 'catch',
  error: 'error'
};

const reduce = (state, action) => {
  switch (action.type) {
    case OPTION_RES.first:
      return { ...state, iSLoading: true, data: action.payload };

    default:
      break;
  }
};

const useAPI = (url, config) => {
  const [state, dispatch] = useReducer(reduce, INIT_API_VAL);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const get = async () => {
    try {
      const res = await axios.get(url, config);
      dispatch({ type: OPTION_RES.first, payload: res.data });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const del = async id => {
    try {
      const res = await axios.delete(`${url}/${id}`, config);
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };
  const post = async body => {
    try {
      const res = await axios.post(`${url}`, body, config);
      setData(prevState => [...prevState, res.data]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const put = async body => {
    try {
      const res = await axios.post(`${url}`, body, config);
      setData(prevState =>
        prevState.map(item => {
          return body.id === item.id ? res.data : item;
        })
      );
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    ...state,
    get,
    del,
    post,
    put
  };
};

export default useAPI;
