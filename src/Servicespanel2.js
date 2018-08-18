import React,{Component} from 'react';
import logo from './logo.svg';

import './Servicespanel2.css';
import Card from './Card.js';




class Servicespanel2 extends Component{

	render() {
		return (
			<div >

						<h2 className="headline"> Services we offer </h2>
						<div className="row">
						<Card title="IOS" link="/Description"/> 
						<Card title="ANDROID" link="/Descriptionandroid" /> 
						<Card title="WEB" link="/Descriptionweb"/>
						<Card title="Content Writing" link="/Descriptioncontent"/>
						<Card title="UI/UX Designing" link="/Descriptionui"/>
						</div>
						
						

						<div className="didnotfind"> 
									<h2> Did not find what you are looking for ? </h2>
									<h3> With improving technology, we are improving with our services to be offered. So Fill the form below and we will contact you regarding your requirement . </h3>

						 </div>

			</div>
		);

	}
}

export default Servicespanel2;


