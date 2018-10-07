import React, {PureComponent} from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import moment from 'moment'
import Countdown from 'react-countdown-moment'

const endDate = moment().add(1, 'days')

function generateRandomNumber(min , max) {
    return Math.random() * (max-min) + min ;
}

export default class Cardholder extends PureComponent {
  render(){
    const now = new Date()
    const day = new Date().setHours(now.getHours() + generateRandomNumber(12,48))

    return (
      <div>
        <Card>
          <CardImg top width="10%" src={this.props.image} alt={this.props.name} />
          <CardBody>
            <div className="card-caption">
                <h1>{this.props.name}</h1>
                <CardText>{this.props.description}</CardText>
            </div>
            <div className="card-button">
                <div>
                    <Countdown endDate={endDate} />
                </div>
                <Route render={({ history}) => (
                  <Button className="btn btn-info" onClick={() => { history.push('/art1') }}>
                    Place a bid
                  </Button>
                )} />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

Cardholder.propTypes = {
  name: PropTypes.string
};

Cardholder.propTypes = {
  description: PropTypes.string
};

Cardholder.propTypes = {
  image: PropTypes.string
};

Cardholder.propTypes = {
  click: PropTypes.string
};
