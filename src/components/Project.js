import React, { useState } from 'react';

function Project({ title, image, deployedUrl, repoUrl }){
    return(
        <div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
            </a>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            GitHub Repository
            </a>
    </div>
)}

export default Project