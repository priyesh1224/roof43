import React,{Component} from 'react';
import logo from './logo.svg';

import './Card.css';




class Card extends Component{

	render() {
		return (
			<div className="col-md-4">

						

			
					
							<div className="container">
									<div class="card category" >
  										<img class="card-img-top" src="iphone2.jpeg" alt="Card image cap"></img>
  										<div class="card-body">
   											 <h5 class="card-title">{this.props.title} </h5>
   											 <p class="card-text"></p>
   											 <a href={this.props.link} class="btn btn-primary">Explore More</a>
 										 </div>
									</div>
							</div>

					

							



				 
					

						

			</div>
		);

	}
}

export default Card;