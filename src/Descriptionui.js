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
		ui : [ "A good looking and responsive website gives your buisness a good first impression to your customers. Be it informational website or an ecommerce , it makes your customers more engaged in your website or application. Nowadays it has become easier to sell your products online and good UI can ." , "Photoshop" , "" ,"login.png","menu.png","store.png"]
		
		
	}
}







	render()
	{
		return( <div> <Navigationbar /> 
			<Individual logo="fas fa-pencil-alt" title="UI/UX Designing" details={this.state.ui[0]} language={this.state.ui[1]} backend={this.state.ui[2]} image1={this.state.ui[3]} image2={this.state.ui[4]} image3={this.state.ui[5]} />
			<Contactform />
			<Contact />
			</div>
			);

	}
}

export default Description;