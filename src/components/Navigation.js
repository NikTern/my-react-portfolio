import React, { useState } from 'react';

function Navigation({ onSectionChange }){
    const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];
    const [selectedSection, setSelectedSection] = useState(sections[0]);
    
    const handleClick = (section) => {
        setSelectedSection(section);
        onSectionChange(section);
    };
    
    return (
    <nav>
        <ul>
        {sections.map((section) => (
            <li key={section}>
            <button
                className={selectedSection === section ? 'active' : ''}
                onClick={() => handleClick(section)}
            >
                {section}
            </button>
            </li>
        ))}
        </ul>
    </nav>
    );
}

export default Navigation