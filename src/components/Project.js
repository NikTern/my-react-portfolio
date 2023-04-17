import React from 'react';

function Project({ title, image, deployedUrl, repoUrl }) {
  return (
    <div className='d-flex flex-column align-items-center'>
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={title}
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
      </a>
      <h4>{title}</h4>
      <p>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </p>
    </div>
  );
}

export default Project;
