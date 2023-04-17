import React, { useState } from 'react';

function Resume(){
    const proficiencies = [
        'JavaScript',
        'HTML',
        'CSS',
        'React',
        'Node.js',
        'MySQL',
        'MongoDB',
        'Express.js',
        'RESTful APIs',
        'GraphQL',
        'Bootstrap',
        'Sequelize',
        'Mongoose',
        'Handlebars.js',
        'Jest',
        'React Testing Library',
        'Git',
        'GitHub',
        'Heroku',
        'jQuery',
        'serverside APIs',


      ];

    return(
        <section className='mx-4'>
            <p></p>
            <h2>Resume</h2>
            <a href={process.env.PUBLIC_URL + "Nikolas-Ternezis-Resume.pdf"} download="NT-Resume.pdf">
            Download My Resume
            </a>
            <p></p>
            <h3>Proficiencies</h3>
            <ul>
            {proficiencies.map((proficiency) => (
                <li key={proficiency}>{proficiency}</li>
            ))}
            </ul>
    </section>
)}

export default Resume