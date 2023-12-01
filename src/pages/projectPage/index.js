import React, { useState, useEffect } from 'react';
import { getProject, createProject } from '../../api/project';
import ProjectCard from '../../components/projectCard';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState('');

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const fetchProjects = () => {
    getProject({
      successCB: (res) => {
        setProjects(res);
      },
      errorCB: (err) => {
        console.error(err);
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject({
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

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className='mx-auto px-4 py-8 max-w-5xl'>
      {isModalOpen && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50'>
          <div className='bg-white p-8 rounded-md'>
            <h2 className='text-lg font-semibold mb-4'>Create Project</h2>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Name'
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
      <div className='flex justify-between items-center mb-6'>
        <div className='text-blue-500 flex-grow text-center font-bold text-4xl'>
          Project
        </div>
        <div
          className='text-blue-500 text-lg font-semibold cursor-pointer'
          onClick={handleModalOpen}
        >
          Create+
        </div>
      </div>

      <div className='grid sm:grid-cols-1 grid-cols-2 lgm:grid-cols-3 gap-6 '>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.name}
            id={project.id}
            fetchProjects={fetchProjects}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
