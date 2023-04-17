import React, { useState } from 'react';

function Resume(){
    const proficiencies = [
        'JavaScript',
        'HTML',
        'CSS',
        'React',
        'Node.js',
        // Add more proficiencies here
      ];

    return(
        <section>
            <h2>Resume</h2>
            <a href="your-resume.pdf" download="Your-Name-Resume.pdf">
            Download My Resume
            </a>
            <h3>Proficiencies</h3>
            <ul>
            {proficiencies.map((proficiency) => (
                <li key={proficiency}>{proficiency}</li>
            ))}
            </ul>
    </section>
)}

export default Resume