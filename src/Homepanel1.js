import React,{Component} from 'react';
import logo from './logo.svg';

import './Homepanel1.css';




class Homepanel1 extends Component{

	render() {
		return (
			<div >
					<div className="row">
						<h2 className="homeheadline">Popular services we offer </h2>
						</div>

			
					<div className="row">
						<div className="col-md-4 col-sm-12">
							<div className="ccontainer row">
									<div class="card ccategory" >
  										<img class="card-img-top" src="iphone2.jpeg" alt="Card image cap"></img>
  										<div class="card-body">
   											 <h5 class="card-title">IOS </h5>
   											 <p class="card-text"></p>
   											 <a href="/Description" class="btn btn-primary">Explore More</a>
 										 </div>
									</div>
							</div>

						</div>

							<div className="col-md-4 col-sm-12">
							<div className="ccontainer row">
									<div class="card ccategory" >
  										<img class="card-img-top" src="iphone.jpeg" alt="Card image cap"></img>
  										<div class="card-body">
   											 <h5 class="card-title">ANDROID </h5>
   											 <p class="card-text"></p>
   											 <a href="/Descriptionandroid" class="btn btn-primary">Explore More</a>
 										 </div>
									</div>
							</div>

						</div>

							<div className="col-md-4 col-sm-12">
							<div className="ccontainer row">
									<div class="card ccategory" >
  										<img class="card-img-top" src="iphone.jpeg" alt="Card image cap"></img>
  										<div class="card-body">
   											 <h5 class="card-title">WEB </h5>
   											 <p class="card-text"></p>
   											 <a href="/Descriptionweb" class="btn btn-primary">Explore More</a>
 										 </div>
									</div>
							</div>

						</div>



				 
					</div>

						<div className="row searchrow"><a href= "/services"><div className="searchmore"> See More Services  </div></a></div>

			</div>
		);

	}
}

export default Homepanel1;