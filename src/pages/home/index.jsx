import React from 'react';
import { useNavigate } from 'react-router-dom';
import LocalStorageService from '../../utils/LocalStorageService';
import { useSelector } from 'react-redux';
import { selectName } from '../../store/user';
const Home = () => {
  const navigate = useNavigate();
  const values = useSelector(selectName);
  return (
    <div>
      {values.name}
      <button
        onClick={() => {
          LocalStorageService.clearToken();
          navigate('/');
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
