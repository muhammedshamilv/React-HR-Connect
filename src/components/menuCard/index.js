import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className='max-w-xs px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'
      onClick={() => {
        navigate(data.navigation);
      }}
    >
      <h2 className='text-2xl font-bold md:text-x text-center'>{data.name}</h2>
      <div className=''>
        <div className=''>
          <img src={data.imageSrc} alt={data.imageAlt} className='h-60 w-128' />
        </div>
      </div>
    </div>
  );
};
export default Card;
