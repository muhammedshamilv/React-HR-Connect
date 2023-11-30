import axios from './axios';

const login = ({ email, password, successCB }) => {
  const data = {
    email: email,
    password: password,
  };
  axios
    .post('api/sign-in/', data)
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => console.log(err));
};

export { login };
