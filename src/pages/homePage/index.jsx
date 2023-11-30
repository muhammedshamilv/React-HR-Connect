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
  console.log(values.is_admin);
  return (
    <div className='bg-gray-200 h-screen'>
      <div className='flex justify-between'>
        <div className='ml-4'>{values.name}</div>
        <div className='text-cyan-400 font-extrabold text-4xl md:text-lg sm:text-center'>
          HAMON TECHNOLOGIES
        </div>
        <div className='mr-4'>
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
      <div className='flex items-center justify-center'>
        {products.map((product) => (
          <Card data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
