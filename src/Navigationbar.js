import React,{Component} from 'react';
import logo from './logo.svg';

import './Navigationbar.css';




class Navigationbar extends Component{

constructor(props)
{
	super(props);
	 this.barspressed = this.barspressed.bind(this);

	 this.state = {
			class : "row closeicon bars " , 
			wrong : "row closeicon wrong ",
			expand : "mobilenavbar ",
			image : "row mobilelogo ",
			cross : false

		}

			


	
};





     barspressed()
	{
		

			var c : "row closeicon bars animatingbarsb " ;
			var w : "row closeicon wrong ";
			var e : "mobilenavbar ";
			var i : "row mobilelogo ";
		this.setState({class : c , wrong : w , expand : e ,image : i,cross:this.state.cross});

		console.log("starting "+this.state.class);
		
		if(this.state.cross===false)
		{
		var n = this.state.class + "animatingbars";
		

		var p = this.state.wrong + "animatingwrong";
		var q = this.state.expand+ "mobilenavbarelongated";
		var t = this.state.image+ "upperimg";
		this.setState({class : n , wrong : p , expand : q ,image : t,cross:true});
		}else
		{
			var n = this.state.class + " animatingbarsreverse";
		

		var p = this.state.wrong + " animatingwrongreverse";
		var q = this.state.expand+ " mobilenavbarelongatedreverse";
		var t = this.state.image+ " lowerimg";
		this.setState({class : n , wrong : p , expand : q ,image : t,cross : false});

		}

		console.log("starting "+this.state.class);
	
		
	}





	render() {



		return (
			<div>

					<div className={this.state.expand}>
							<div className={this.state.wrong}>
								<button onClick = {this.barspressed}>  <i class="fas fa-times"></i> </button>
							</div>

							<div className={this.state.class} >
								<button id="bars" onClick = {this.barspressed}> <i class="fas fa-bars"></i></button>
							</div>

							<div className={this.state.image}>
								<img src="roof5.png" alt="logo" />
							</div>
							<div className="row">
								<h2> Home </h2>
							</div>
							<div className="row">
								<h2> Services </h2>
							</div>
							<div className="row">
								<h2> Our work </h2>
							</div>
							<div className="row">
								<h2> Contact us </h2>
							</div>





					</div>









				 <div className="navbar row">
				 	<div className="col-md-7 col-sm-12">
				 		

				 	</div>
				 	<div className="col-md-5 col-sm-12">
				 		<div className="row">
				 			<div className="col-md-3 col-sm-12">
				 				<a href="/">Home </a>
				 			</div>
				 			<div className="col-md-3 col-sm-12">
				 				<a href="/services">Services </a>
				 			</div>
				 			<div className="col-md-3 col-sm-12">
				 				Our work
				 			</div>
				 			<div className="col-md-3 col-sm-12">
				 				<a href="/Contactpage">Contact us </a>
				 			</div>


				 		</div>
				 	</div>



				 </div>
			</div>



		);

	}
}

export default Navigationbar;