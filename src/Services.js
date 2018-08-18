import React,{Component} from 'react';
import logo from './logo.svg';
import Navigationbar from './Navigationbar.js';
import Hero from './Hero.js';
import './home.css'
import Homepanel1 from './Homepanel1.js';
import Homepanel2 from './Homepanel2.js';
import Homepanel3 from './Homepanel3.js';
import Homepanel4 from './Homepanel4.js';
import Contact from './Contact.js';
import Servicespanel1 from './Servicespanel1.js';
import Servicespanel2 from './Servicespanel2.js';
import Contactform from './Contactform.js';



class Services extends Component{

	render()
	{
		return( <div> <Navigationbar /> 
			<Servicespanel1 />
			<Servicespanel2 />
			<Contactform />
			<Contact />
			</div>);

	}
}

export default Services;