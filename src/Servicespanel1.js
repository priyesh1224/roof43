import React,{Component} from 'react';
import logo from './logo.svg';

import './Servicespanel1.css';




class Hero extends Component{

	render() {
		return (
			<div className="container-fluid spbanner">
							
							<div id="demo" class="carousel slide" data-ride="carousel">

 							

 								 <div class="carousel-inner">
   									 <div class="carousel-item active">
      										<h2> IOS APPLICATION DEVELOPMENT</h2>
    								 </div>
    								 <div class="carousel-item">
      										<h2> ANDROID APPLICATION DEVELOPMENT</h2>
    								 </div>
    								 <div class="carousel-item">
     										 <h2> WEB DEVELOPMENT</h2>
    								 </div>
    								  <div class="carousel-item">
     										 <h2> CONTENT WRITING</h2>
    								 </div>
    								  <div class="carousel-item">
     										 <h2> UI/UX DESIGNING</h2>
    								 </div>
 							    </div>

  								
  								<a class="carousel-control-prev" href="#demo" data-slide="prev">
   										<h2> <i class="fa fa-chevron-left" aria-hidden="true"></i></h2>
 							    </a>
  								<a class="carousel-control-next" href="#demo" data-slide="next">
  										<h2> <i class="fa fa-chevron-right" aria-hidden="true"></i></h2>
    							</a>

							</div>













				
				 
			</div>



		);

	}
}

export default Hero;