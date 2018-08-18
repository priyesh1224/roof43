import React,{Component} from 'react';
import logo from './logo.svg';

import './Homepanel4.css';




class Homepanel4 extends Component{

	render() {
		return (
			<div >

						<h2 className="panel4headline">Our valuable clients </h2>

			
					<div className="row">
						<div className="col-md-4 col-sm-12">
							<div className="container">
									<div class="card panel4category" >
  										<img class="card-img-top" src="iphone2.jpeg" alt="Card image cap"></img>
  										<div class="card-body">
   											 <h5 class="card-title">Dhokrasto </h5>
   											 <p class="card-text"></p>
   											 <a href="#" class="btn btn-primary">Visit website</a>
 										 </div>
									</div>
							</div>

						</div>

							<div className="col-md-4 col-sm-12">
							<div className="container">
									<div class="card panel4category" >
  										<img class="card-img-top" src="iphone.jpeg" alt="Card image cap"></img>
  										<div class="card-body">
   											 <h5 class="card-title">Volatility Game </h5>
   											 <p class="card-text"></p>
   											 <a href="#" class="btn btn-primary">Visit website</a>
 										 </div>
									</div>
							</div>

						</div>

							<div className="col-md-4 col-sm-12">
							<div className="container">
									<div class="card panel4category" >
  										<img class="card-img-top" src="iphone.jpeg" alt="Card image cap"></img>
  										<div class="card-body">
   											 <h5 class="card-title">Mooch wale </h5>
   											 <p class="card-text"></p>
   											 <a href="#" class="btn btn-primary">Visit website</a>
 										 </div>
									</div>
							</div>

						</div>



				 
					</div>

						<div className="panel4searchmore"> See More Clients </div>

			</div>
		);

	}
}

export default Homepanel4;