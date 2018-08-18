import React,{Component} from 'react';
import logo from './logo.svg';
import Navigationbar from './Navigationbar.js';
import Hero from './Hero.js';
import './Description.css'
import Homepanel1 from './Homepanel1.js';
import Homepanel2 from './Homepanel2.js';
import Homepanel3 from './Homepanel3.js';
import Homepanel4 from './Homepanel4.js';
import Contact from './Contact.js';
import Servicespanel1 from './Servicespanel1.js';
import Servicespanel2 from './Servicespanel2.js';
import Contactform from './Contactform.js';
import Individual from './Individual.js';



class Description extends Component{

constructor()
{
	super();
	this.state = {
		content : [ "Content is what your website or application stand out among your competitors.A good and organised content makes your customers more clear your about services you offer and also helps to rank up your website in search engine optimisation ranking." , "-" , "-" ,"","",""]
	
		
	}
}







	render()
	{
		return( <div> <Navigationbar /> 
			<Individual logo="fas fa-align-center" title="Content Writing" details={this.state.content[0]} language={this.state.content[1]} backend={this.state.content[2]} image1={this.state.content[3]} image2={this.state.content[4]} image3={this.state.content[5]} />
			<Contactform />
			<Contact />
			</div>
			);

	}
}

export default Description;