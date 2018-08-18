import React,{Component} from 'react';
import logo from './logo.svg';

import './Individual.css';




class Individual extends Component{

	constructor()
	{
		super();
		this.state = {
			logo : []
		}
	}


componentDidMount()
{
	var logo = "fab  "+this.props.logo;
	this.setState({logo : "fab  "+this.props.logo});





	
}


 content()
{

	var cont="";
	if(this.props.image1 === "")
	{
		cont= "";
	}

	else if(this.props.image2 !== "" && this.props.image3!== "")
	{
		cont = 	 <div className="row images"><div className="col-3"><img src= {this.props.image1} alt="login"></img></div> <div className="col-3"><img src= {this.props.image2} alt="login"></img></div><div className="col-3"><img src= {this.props.image3} alt="login"></img></div> </div>;

	}else if(this.props.image2 !== "" && this.props.image3=== "")
	{
		cont = 	<div className="row images"> <div className="col-5"><img src= {this.props.image1} alt="login"></img></div><div className="col-5"><img src= {this.props.image2} alt="login"></img></div> </div>;


	}else if(this.props.image2 === "" && this.props.image3==="")
	{
		cont = 	<div className="row images"> <div className="col-10"><img src= {this.props.image1} alt="login"></img></div> </div>;

	}



	return cont;



}


	render() {

	



		return (
			<div >
					<div className="container individual">
						<div className="row">
							<div className="col-4">
								<div className="row">

									<i class={this.state.logo}></i>
								
									
								</div>
								
							</div>
							<div className="col-8">
								<div className="row">
									{this.props.title}
								</div>
							</div>

						</div>

						<div className="row details">
							<div className="col-10">
								{this.props.details}
							</div>
						</div>

						<div className="row requirements">
							<div className="col-12">
								Programming language used :  {this.props.language}
							</div>
						</div>

						<div className="row requirements">
							<div className="col-12">
								Database and Backend :  {this.props.backend}
							</div>
						</div>

						<div className="row requirements demo">
							<div className="col-12">
								UI Demo
							</div>
						</div>


					


							{this.content()}

						




					</div>
			</div>
		);

	}
}

export default Individual;