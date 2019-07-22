import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'

function App() {
  return (
  
 

    <div className="App">
	
	  
	  <div className="App-Nav">
	  	<img src="cv_logo.png" alt="logo" height="42" width="42"/>
		<Header />
	  </div>
	  
      <header className="App-header">
        <p>
			Build a Perfect CV With Us
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
		
		<form className="App-form">
		  First name:
		  <input type="text" name="firstname"/><br/>
		  Last name:
		  <input type="text" name="lastname"/>
		</form>

		<button type="button">Upload Your CV</button>

        </a>
      </header>
	
    </div>
	
	
  );
}

export default App;
