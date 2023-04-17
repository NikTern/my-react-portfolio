import React, { useState } from 'react';
import Project from './Project';

function Portfolio(){
    const projects = [
        //add project details here
        {
            title: 'Furry Foster Home',
            image: `${process.env.PUBLIC_URL}/project1.png`,
            deployedUrl: 'https://furryfosterhome.herokuapp.com/',
            repoUrl: 'https://github.com/NikTern/Furry-Foster-Home',
          },
          {
            title: 'JATE',
            image: `${process.env.PUBLIC_URL}/project2.png`,
            deployedUrl: 'https://jate-online-text-editor.herokuapp.com/',
            repoUrl: 'https://github.com/NikTern/-Just-Another-Text-Editor-',
          },
          {
            title: 'Social Media API',
            image: `${process.env.PUBLIC_URL}/project3.jpg`,
            deployedUrl: '',
            repoUrl: 'https://github.com/NikTern/Social-Media-API',
          },
          {
            title: 'CMS App',
            image: `${process.env.PUBLIC_URL}/project4.png`,
            deployedUrl: 'https://drive.google.com/file/d/1Z1cMQOP_bNvxg4-Ppvy6bH9yOV_v__oI/view?usp=sharing',
            repoUrl: 'https://github.com/NikTern/Company-Content-Management-System',
          }
    ];
    
    return (
        <section className='d-flex flex-column justify-content-around align-items-center'>
            <p></p>
            <h2>Portfolio</h2>
            <div className='w-100 d-flex mb-3 flex-wrap justify-content-around px-9'>
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
