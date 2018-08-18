import React,{Component} from 'react';
import logo from './logo.svg';

import './Contact.css';




class Contact extends Component{

    
	constructor()
	{
		super();
		this.state = {
			posts : [],
			followers : [],
			following : []
		}
	}

	getdata()
	{
		return fetch('https://api.instagram.com/v1/users/self/?access_token=8380079599.7ef2004.8ffc4b976d3d4e5ba732e7b5ea887e87').then((response) => response.json()).then((responsejson) => {
			this.setState({posts : responsejson.data.counts.media});
			this.setState({followers : responsejson.data.counts.followed_by});
			this.setState({following : responsejson.data.counts.follows});
			
		}).catch((error) => {
			console.error(error);
		});
	}

	componentDidMount()
	{
		this.getdata();
	}




	render() {
			return (
			<div>
				<h2 className="contacth2"> Contact us </h2>
				 

		<div className="row ">
			<div className="contactsregion">
				 <div className="whole">
				 	<div className="row">
				 		<div className="col">
				 				<div className="tryfb">
				 					<h2><i class="fab fa-facebook-f"></i></h2>
				 				</div>
				 		</div>
				 		<div className="col">
				 				<div className="side fb">
				 						<h4> ROOF Development </h4>
				 					<div class="fb-like" 
    									data-href="https://www.facebook.com/ROOF-Development-1777832702325005/?modal=admin_todo_tour" 
   										 data-layout="button_count" 
   										 data-action="like" 
   										 data-size="large"
   										 data-share="false"
   										 data-show-faces="false"
   										 data-colorscheme="light">
  									</div>
  									 <br /><br />
  									 <div class="fb-share-button" 
   										 data-href="https://www.facebook.com/ROOF-Development-1777832702325005/?modal=admin_todo_tour" 
    									 data-layout="button"
    									 data-size="large"
    									 >
  									</div>

  									 <a href="https://www.facebook.com/ROOF-Development-1777832702325005/?modal=admin_todo_tour" target="_blank"> <button className="instabtn">Visite our page </button></a> 


				 				
				 				</div>
				 		</div>
				 	</div>
				 	
				 </div> 
				  <div className="whole">
				 	<div className="row">
				 		<div className="col">
				 				<div className="tryfb">
				 					<h2><i class="fab fa-instagram"></i></h2>
				 				</div>
				 		</div>
				 		<div className="col">
				 				<div className="side">
				 					
				 					<h3> Roof Development </h3>
				 					<h3> Followers : {this.state.followers} </h3>
				 					<h3> Posts : {this.state.posts} </h3>

				 					 <a href="https://www.instagram.com/roofdevelopment/" target="_blank"> <button className="instabtn">Visite our page </button></a> 
				 				</div>
				 		</div>
				 	</div>
				 	
				 </div> 
				   <div className="whole">
				 	<div className="row">
				 		<div className="col">
				 				<div className="tryfb">
				 					<h2><i class="fab fa-snapchat-square"></i></h2>
				 				</div>
				 		</div>
				 		<div className="col">
				 				<div className="side">
				 					<h3> Add us </h3>
				 					<h3> Snapchat Id - Coming Soon </h3>
				 					
				 					<button> Share our ID </button>
				 				</div>
				 		</div>
				 	</div>
				 	
				 </div> 
				   <div className="whole">
				 	<div className="row">
				 		<div className="col">
				 				<div className="tryfb">
				 					<h2><i class="fas fa-envelope-square"></i></h2>
				 				</div>
				 		</div>
				 		<div className="col">
				 				<div className="side">
				 					<h3 className="mailtop"> Mail us at </h3>
				 					<h3 className="mail">pvasani187@gmail.com</h3>
				 					 <a href='mailto:pvasani187@gmail.com' target="_blank"><button>Mail Us</button></a>
				 				</div>
				 		</div>
				 	</div>
				 	
				 </div> 
				   <div className="whole">
				 	<div className="row">
				 		<div className="col">
				 				<div className="tryfb">
				 					<h2><i class="fas fa-phone"></i></h2>
				 				</div>
				 		</div>
				 		<div className="col">
				 				<div className="side">
				 					<h3> Contact us </h3>
				 					<h3>+918100209367</h3>
				 					<h3> Calling hours- 11 A.M to 8 P.M </h3>
				 					<a href="tel:+918100209367"> <button>Call us</button> </a>
				 				</div>
				 		</div>
				 	</div>
				 	
				 </div> 
				   <div className="whole">
				 	<div className="row">
				 		<div className="col">
				 				<div className="tryfb">
				 					<h2><i class="fas fa-map-marker-alt"></i></h2>
				 				</div>
				 		</div>
				 		<div className="col">
				 				<div className="side">
				 					<h3>Office Address </h3>
				 					<h3> 24,A Rabindra Sarani ,Kolkata - 700073 </h3>
				 					
				 					<a href="https://www.google.com/maps/place/Madan+Mansion,+Poddar+Court,+Tiretti,+Kolkata,+West+Bengal+700012/@22.5715272,88.3553638,19z/data=!4m5!3m4!1s0x3a0277aee8a31a13:0xb47599c54ae88657!8m2!3d22.5715077!4d88.3559197" target="_blank"><button> See in MAP</button> </a>
				 				</div>
				 		</div>
				 	</div>
				 	
				 </div> 
			</div>

		</div>



		</div>






				 



			



		);

	}
}

export default Contact;