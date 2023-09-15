import React from 'react';
import { data } from '../../Projects/Projects';

export const Projects = () => {
  return (
    <div id='projects' className='h-screen'>
      <h1>Proyectos</h1>
      <div className="flex flex-wrap">
        {data.map((project) => (
          <div key={project.id} className="max-w-md m-4 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={project.imagen} alt={project.nombre} className="w-full h-auto" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.nombre}</h2>
              <p className="text-gray-600">Link: <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
