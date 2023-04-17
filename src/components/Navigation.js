import React, { useState } from 'react';

function Navigation({ onSectionChange }){
    const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];
    const [selectedSection, setSelectedSection] = useState(sections[0]);
    
    const handleClick = (section) => {
        setSelectedSection(section);
        onSectionChange(section);
    };
    
    return (
    <nav className='d-flex align-items-center justify-content-center m-0 p-0'>
        <ul className='d-flex align-items-center justify-content-center m-0 p-0 flex-wrap'>
        {sections.map((section) => (
            <ul className="p-0 p-1 pb-2" key={section}>
            <button type="button" data-bs-toggle="button"
                className={`btn btn-outline-primary ${selectedSection === section ? 'active' : ''}`}
                aria-pressed={selectedSection === section ? 'true' : 'false'}
                onClick={() => handleClick(section)}
            >
                {section}
            </button>
            </ul>
        ))}
        </ul>
    </nav>
    );
}

export default Navigation