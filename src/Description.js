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
		ios : [ "Mobile Application has nowadays become most important tool of engaging your customers into your service , be it selling products or for social media. We all prefer mobile applications these days. With growing demands for IPhones , IOS Apps has started becoming more popular than it was before. Moreover with apple's latest improvement in the world of AI , it has become more easier and attractive to have an IOS app." , "SWIFT & OBJECTIVE-C" , "Firebase / SQL / MongoDB" ,"login.png","menu.png","store.png"],
		android : [],
		web : [],
		content : []
		
	}
}







	render()
	{
		return( <div> <Navigationbar /> 
			<Individual logo="fa-app-store-ios" title="IOS Applications" details={this.state.ios[0]} language={this.state.ios[1]} backend={this.state.ios[2]} image1={this.state.ios[3]} image2={this.state.ios[4]} image3={this.state.ios[5]} />
			<Contactform />
			<Contact />
			</div>
			);

	}
}

export default Description;