import React, { useState } from 'react';
import Navigation from './Navigation';

function Header({ onSectionChange }){
return(
    <header>
      <h1>Your Name</h1>
      <Navigation onSectionChange={onSectionChange}/>
    </header>
)}

export default Header