import React from 'react';
import logo from './cv_logo.png';
import image from './head.jpg';
import './App.css';
import Header from './Header.js'



function App() {
  return (
  

    <div className="App">
	
    <div className="App-Nav">
	  	<img src={image} width= "100%" height="auto"/>
		<img STYLE="position:absolute; TOP:50px; left:600px; WIDTH:170px; HEIGHT:170px" SRC={logo}/>
		 <Header />
		</div>
	  
      
	  
	 <header className="App-header">
	  
        <p><font size="15">About Us</font></p>
		
		<p><font size="5">A passionate team</font></p>
	
		<p><font size="4">our goal is to make the perfect
		environment for you to upload your CV!</font></p>
		
		<p><font size="4"> our team members </font> </p>
		<p><font size="4"> Asma | Eman | Lena </font> </p>
		
		</header> 
	 
	
    </div>
	
  );
}

export default App;
