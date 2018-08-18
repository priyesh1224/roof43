import React,{Component} from 'react';
import logo from './logo.svg';

import './Hero.css';




class Hero extends Component{

	render() {
		return (
			<div className="container-fluid banner">
				<div className="herocontainer">
					<div className="row letters">
						<div className="col-3">

							<div className="row"><h3>R</h3></div>
						</div>
						<div className="col-3 extra">
		
							<div className="row"><h3>O</h3></div>
						</div>
						<div className="col-3">

							<div className="row"><h3>O</h3></div>
						</div>
						<div className="col-3">

							<div className="row"><h3>F</h3></div>
						</div>


					</div>

					<div className="row row2">
						<div className="col-3">
							
						</div>
						<div className="col-3 ">
							<div className="row special">
							
							</div>
						</div>
						<div className="col-3">
							
						</div>
						<div className="col-3">
							
						</div>


					</div>




				<div  id="carouselExampleSlidesOnly" class="carousel slide row3" data-ride="carousel">
  					<div class="carousel-inner">
  					  <div class="carousel-item active">
     					 
     					 IOS APPLICATION DEVELOPMENT
   					  </div>
    				 <div class="carousel-item">
     					 ANDROID APPLICATION DEVELOPMENT
    				 </div>
   					 <div class="carousel-item">
      					WEBSITE DEVELOPMENT
    				 </div>
    				 <div class="carousel-item">
      					CONTENT WRITING
    				 </div>
  				</div>
			</div>







				</div>
				 
			</div>



		);

	}
}

export default Hero;