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



class Home extends Component{

	render()
	{
		return( <div> <Navigationbar /> 
			<Hero />
			<Homepanel1 />
			<Homepanel2 />
			
			
			<Homepanel3 />
			<Contact />
			</div>);

	}
}

export default Home;