import React, { useState } from 'react';

function Footer() {
  return (
    <footer className="d-flex justify-content-center align-items-center px-10 pt-3">
      <a href="https://github.com/niktern" target="_blank" rel="noopener noreferrer" className="mx-2">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/nikolas-ternezis-6831a0207/" target="_blank" rel="noopener noreferrer" className="mx-2">
        LinkedIn
      </a>
      <a href="https://twitter.com/nikternezis" target="_blank" rel="noopener noreferrer" className="mx-2">
        Twitter
      </a>
    </footer>
  );
}

export default Footer;
