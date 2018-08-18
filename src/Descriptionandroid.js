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
		android : [ "Mobile Application has nowadays become most important tool of engaging your customers into your service , be it selling products or for social media. We all prefer mobile applications these days. With having the most android users , android app is must to grow your buisness." , "JAVA & XML" , "Firebase / SQL / MongoDB" ,"login.png","menu.png","store.png"]
		
		
	}
}







	render()
	{
		return( <div> <Navigationbar /> 
			<Individual logo="fa-android" title="Android Applications" details={this.state.android[0]} language={this.state.android[1]} backend={this.state.android[2]} image1={this.state.android[3]} image2={this.state.android[4]} image3={this.state.android[5]} />
			<Contactform />
			<Contact />
			</div>
			);

	}
}

export default Description;