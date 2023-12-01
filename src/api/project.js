import LocalStorageService from '../utils/LocalStorageService';
import axios from './axios';

const token = LocalStorageService.getAccessToken();
const headers = {
  Authorization: `Bearer ${token}`,
};
const getProject = ({ successCB, errorCB }) => {
  axios
    .get('api/staff/project/', { headers })
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      if (errorCB) {
        errorCB(err);
      }
    });
};

const createProject = ({ name, successCB, errorCB }) => {
  const data = {
    name: name,
  };
  axios
    .post('api/staff/project/', data, { headers }) // Reordered the arguments, headers should be the third argument
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      if (errorCB) {
        errorCB(err);
      }
    });
};
const deleteProject = ({ id, successCB, errorCB }) => {
  const data = {
    id: id,
  };
  axios
    .delete('api/staff/project/', { headers, data })
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      if (errorCB) {
        errorCB(err);
      }
    });
};

const editProject = ({ id, name, successCB, errorCB }) => {
  const data = {
    id: id,
    name: name,
  };
  axios
    .put('api/staff/project/', data, { headers })
    .then((response) => {
      successCB(response.data);
    })
    .catch((err) => {
      console.error(err);
      if (errorCB) {
        errorCB(err);
      }
    });
};

export { getProject, createProject, deleteProject, editProject };
