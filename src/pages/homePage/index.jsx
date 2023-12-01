import React from 'react';
import { useNavigate } from 'react-router-dom';
import LocalStorageService from '../../utils/LocalStorageService';
import { useSelector } from 'react-redux';
import { selectName } from '../../store/user';
import Card from '../../components/menuCard';
import employee from '../../assets/images/employee.png';
import project from '../../assets/images/project.png';
import grievance from '../../assets/images/grievance.jpg';

const Home = () => {
  const navigate = useNavigate();
  const values = useSelector(selectName);
  const products = [
    {
      id: 1,
      name: 'Project',
      navigation: '/project',
      imageSrc: project,
      imageAlt: 'project',
    },
    {
      id: 2,
      name: 'Employee',
      navigation: '/employee',
      imageSrc: employee,
      imageAlt: 'employee',
    },
    {
      id: 3,
      name: 'Grievance',
      navigation: '/grievance',
      imageSrc: grievance,
      imageAlt: 'grievance',
    },
    // More products...
  ];
  const name = LocalStorageService.getUser();
  return (
    <div className='bg-slate-200 mdm:h-screen'>
      <div className='flex justify-between'>
        <div className='ml-4 sm:hidden'>{name}</div>
        <div className='text-lime-700 sm:flex-grow sm:pl-20 sm:text-2xl text-center font-extrabold text-4xl'>
          HAMON TECHNOLOGIES
        </div>
        <div className='pr-4'>
          <button
            onClick={() => {
              LocalStorageService.clearToken();
              navigate('/');
            }}
          >
            Logout
          </button>
        </div>
      </div>
      <div className='flex md:flex-col items-center justify-center'>
        {products.map((product) => (
          <Card data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
