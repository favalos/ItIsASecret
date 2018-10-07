import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import Img from 'react-image'
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import image8 from './image8.jpg';

import { Player, ControlBar } from 'video-react';

import taylor from './video.mp4';
import bieber from './bieber.mp4';

import "./video-react.css";

/*ControlBar.propTypes = {

  // Hide the control bar automatically after the player is inactive
  // default: 'true'
  autoHide: PropTypes.bool,
  // Do not render the control bar if set it to true
  // default: 'false'
  disableCompletely: PropTypes.bool,

}*/

const Home = () => (
  <div>
    <div class="right-container">
        <h2 class="tagline">Give big and win a special gift.</h2>
        <div class="buy-button">
        <a
          className="App-link"
          href="/auctions"
        >
        View Autions
        </a>
        </div>
    </div>

    <div class="videos-container">
        <Player
          autoPlay
          loop
          poster=""
          src={bieber}
        >
            <ControlBar disableCompletely={true} className="my-class" />
        </Player>

        <Player
          autoPlay
          loop
          poster=""
          src={taylor}
        >
            <ControlBar disableCompletely={true} className="my-class" />
        </Player>
    </div>
  </div>
)

export default Home
