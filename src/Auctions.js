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
		  				<Cardholder name="Dwayne" description="Personalized shoutout to you" image={image1}/>
		  			</Col>
		  			<Col md={4}>
		  				<Cardholder name="Madonna" description="A song for you" image={image2}/>
		  			</Col>
		  			<Col md={4}>
		  				<Cardholder name="Justin" description="A song for you" image={image3}/>
		  			</Col>
		  		</Row>
		  		<Row className="row">
					<Col md={4}>
		  				<Cardholder name="Lady Gaga" description="A song for you" image={image4}/>
		  			</Col>
			  		<Col md={4}>
			  			<Cardholder name="Will" description="A song for you" image={image5}/>
			  		</Col>
			  		<Col md={4}>
			  			<Cardholder name="Taylor" description="Personalized shoutout to you" image={image6}/>
			  		</Col>
		  		</Row>
			</div>
		);
	}
}
