import React,{Component} from 'react';
import logo from './logo.svg';

import './Contactform.css';




class Contactform extends Component{

	render() {
		return (
			<div className="container-fluid contactform">
							
							<h2> Contact Form </h2>
          <form>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="number" placeholder="Contact Number" required />
                <input type="textarea" placeholder="Requirement" /><br />
                <input type="submit" value="Submit" />



          </form>

          <h3> Our relevant person related to your requirement , will contact you as soon as possible  </h3>










				
				 
			</div>



		);

	}
}

export default Contactform;