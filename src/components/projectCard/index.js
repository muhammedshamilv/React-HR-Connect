import React, { useState } from 'react';
import { deleteProject } from '../../api/project';
import { editProject } from '../../api/project';
const ProjectCard = ({ title, id, fetchProjects }) => {
  const [projectName, setProjectName] = useState(title);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editProject({
      id: id,
      name: projectName,
      successCB: (res) => {
        fetchProjects();
      },
      errorCB: (err) => {
        console.error(err);
      },
    });
    setIsModalOpen(false);
  };
  const removeProject = (id) => {
    deleteProject({
      id: id,
      successCB: (res) => {
        console.log('Project deleted:', res);
        fetchProjects();
      },
      errorCB: (err) => {
        console.error('Failed to delete project:', err);
      },
    });
  };
  return (
    <div className='border rounded p-4 mb-4 flex items-center justify-between'>
      {isModalOpen && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50'>
          <div className='bg-white p-8 rounded-md'>
            <h2 className='text-lg font-semibold mb-4'>Edit Project</h2>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Name'
                value={projectName}
                className='border mb-2 p-2 rounded-md'
                onChange={(e) => setProjectName(e.target.value)}
              />
              <button
                type='submit'
                className='bg-blue-500 text-white px-4 py-2 rounded-md'
              >
                Submit
              </button>
            </form>
            <button className='mt-4 text-blue-500' onClick={handleModalClose}>
              Close
            </button>
          </div>
        </div>
      )}
      <h2>{title}</h2>
      <div>
        <button onClick={handleModalOpen}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 mr-2 text-blue-500 cursor-pointer'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 12a3 3 0 11-6 0 3 3 0 016 0zM19 12a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
        <button
          onClick={() => {
            removeProject(id);
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-red-500 cursor-pointer'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
