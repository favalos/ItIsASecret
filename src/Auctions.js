import React, {PureComponent} from 'react';
import { Row, Col } from 'react-bootstrap';
import Cardholder from './Cardholder';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';

export default class Auctions extends PureComponent{
	render(){
		return(
			<div>
				<Row>
					<Col md={4}>
		  				<Cardholder name="Dwayne" description="Description of Art 1" image={image1}/>
		  			</Col>
		  			<Col md={4}>
		  				<Cardholder name="Madonna" description="Description of Art 2" image={image2}/>
		  			</Col>
		  			<Col md={4}>
		  				<Cardholder name="Justin" description="Description of Art 3" image={image3}/>
		  			</Col>
		  		</Row>
		  		<Row className="row">
					<Col md={4}>
		  				<Cardholder name="Lady Gaga" description="Description of Art 4" image={image4}/>
		  			</Col>
			  		<Col md={4}>
			  			<Cardholder name="Will" description="Description of Art 5" image={image5}/>
			  		</Col>
			  		<Col md={4}>
			  			<Cardholder name="Taylor" description="Description of Art 6" image={image6}/>
			  		</Col>
		  		</Row>
			</div>
		);
	}
}
