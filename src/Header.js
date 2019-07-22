import React from 'react';
import logo from './logo.svg';
import './App.css';
import appLogo from './cv_logo.png';

document.body.style = 'background: CadetBlue ;';

function Header() {
  return (
    <div className="Header">

		<ul>
		  <li><a href="">Home</a></li>
		  <li><a href="">Preview Uploaded CV</a></li>
		  <li><a href="">About</a></li>
		</ul>
    </div>
	
	
  );
}

export default Header;
