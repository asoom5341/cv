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
			Your Uploaded CV

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
		
		<table className="App-table">
		  <tr>
			<td>Firstname</td>
			<th>Lastname</th> 
			<th>University</th>
			<th>Major</th>
			<th>CV</th>

		  </tr>
		  <tr>
			<td>      </td>
			<td>      </td> 
			<td>      </td>
			<td>      </td>
			<td>Download</td>
		  </tr>
		  <tr>
			<td>      </td>
			<td>      </td> 
			<td>      </td>
			<td>      </td>
			<td>Download</td>
		  </tr>
		  <tr>
			<td>      </td>
			<td>      </td> 
			<td>      </td>
			<td>      </td>
			<td>Download</td>
		  </tr>
		  <tr>
			<td>      </td>
			<td>      </td> 
			<td>      </td>
			<td>      </td>
			<td>Download</td>
		  </tr>
		</table>

        </a>
      </header>
	
    </div>
	
	
  );
}

export default App;
