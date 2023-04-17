import React, { useState } from 'react';
import Project from './Project';

function Portfolio(){
    const projects = [
        //add project details here
        {
            title: 'Project 1',
            image: 'https://via.placeholder.com/150',
            deployedUrl: 'https://example.com/project1',
            repoUrl: 'https://github.com/username/project1',
          },
          {
            title: 'Project 2',
            image: 'https://via.placeholder.com/150',
            deployedUrl: 'https://example.com/project2',
            repoUrl: 'https://github.com/username/project2',
          },
          {
            title: 'Project 3',
            image: 'https://via.placeholder.com/150',
            deployedUrl: 'https://example.com/project3',
            repoUrl: 'https://github.com/username/project3',
          },
          {
            title: 'Project 4',
            image: 'https://via.placeholder.com/150',
            deployedUrl: 'https://example.com/project4',
            repoUrl: 'https://github.com/username/project4',
          }
    ];
    
    return (
        <section>
            <h2>Portfolio</h2>
            <div>
                {projects.map((project) => (
                    <Project
                    key={project.title}
                    title={project.title}
                    image={project.image}
                    deployedUrl={project.deployedUrl}
                    repoUrl={project.repoUrl}
                    />
                ))}
            </div>
      </section>
    );
}

export default Portfolio