import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';

import Navigationbar from './Navigationbar.js';
import Services from './Services.js';
import Contactpage from './Contactpage.js';
import Description from './Description.js';
import Descriptionandroid from './Descriptionandroid.js';
import Descriptionweb from './Descriptionweb.js';
import Descriptioncontent from './Descriptioncontent.js';
import Descriptionui from './Descriptionui.js';




const Route = ({ path , component }) => {
  const pathname = window.location.pathname;

  if(pathname === '/')
  {

     return ( <Home />);

  }
  else if(pathname === '/services')
  {
  	return ( <Services />);
  }
   else if(pathname === '/Contactpage')
  {
    return ( <Contactpage />);
  }
  else if(pathname === '/Description')
  {
    return ( <Description />);
  }
  else if(pathname === '/Descriptionandroid')
  {
    return ( <Descriptionandroid />);
  }
  else if(pathname === '/Descriptionweb')
  {
    return ( <Descriptionweb />);
  }
  else if(pathname === '/Descriptioncontent')
  {
    return ( <Descriptioncontent />);
  }
    else if(pathname === '/Descriptionui')
  {
    return ( <Descriptionui />);
  }
    else if(pathname.match(path))
  {
    return ( React.createElement(component));

  } else {
    return null;
  }
};





class App extends Component {
  render() {
    return (  <Route path='/' component={Home} /> 
    	);
  }
}

export default App;
