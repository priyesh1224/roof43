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
		web : [ "A functional and responsive website gives your buisness a good first impression to your customers. Be it informational website or an ecommerce , it makes easy for your customers to know more about your services. Nowadays it has become easier to sell your products online." , "Html / Css / Javascript / Php / React / NodeJS" , "Firebase / SQL / MongoDB" ,"Desktopui.png","",""]
		
		
	}
}







	render()
	{
		return( <div> <Navigationbar /> 
			<Individual logo="fa-html5" title="Website Development" details={this.state.web[0]} language={this.state.web[1]} backend={this.state.web[2]} image1={this.state.web[3]} image2={this.state.web[4]} image3={this.state.web[5]} />
			<Contactform />
			<Contact />
			</div>
			);

	}
}

export default Description;