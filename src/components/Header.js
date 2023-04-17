import React, { useState } from 'react';
import Navigation from './Navigation';

function Header({ onSectionChange }) {
  return (
    <header className="d-flex align-items-center justify-content-center py-4 flex-wrap">
      <h1 className="m-0">Your Name</h1>
      <Navigation onSectionChange={onSectionChange} />
    </header>
  );
}

export default Header;
