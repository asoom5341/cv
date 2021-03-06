import React from 'react';
import './App.css';
import Header from './Header.js'
import image from './head.jpg';
import logo from './cv_logo.png';

function App() {
  return (
  
    <div className="App">
	
	  <div className="App-Nav">
	  	<img src={image} width= "100%" height="auto"/>
		<img STYLE="position:absolute; TOP:50px; left:600px; WIDTH:170px; HEIGHT:170px" SRC={logo}/>
		<Header />
	  </div>
	  
      <header className="App-header">

        <p>
			Upload Your CV with Us!

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
		
		<form className="App-form">
		  First name:
		  <input type="text" name="firstname"/><br/><br/>
		  Last name:
		  <input type="text" name="lastname"/><br/><br/>
		  University:
		  <input type="text" name="university"/><br/><br/>
		  Major:
		  <input type="text" name="major"/><br/>
		  
		</form>

		<button type="button">Upload Your CV</button>

        </a>
      </header>
	
    </div>
	
	
  );
}

export default App;
