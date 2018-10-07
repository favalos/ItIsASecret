import React from 'react'

import image from './profile.jpg'

import winner_icon from './winner.png'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import './rc-steps.css';
import './iconfont.css';

import ImageUploader from 'react-images-upload';
import Steps, { Step } from 'rc-steps';

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});

let selected_picture = '';
let sale_price = formatter.format(1200);
let winner_name = 'Bentley';
let winner_location = 'San Francisco, CA';

class Celebrity extends React.Component {
    constructor(props) {
        super(props);
        this.onDrop = this.onDrop.bind(this);

        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
          pictures: [],
          step: 0,
          selected_image: '',
          doneClass: 'done-button deactive'
        };
    }

    readFile(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        // Read the image via FileReader API and save image result in state.
        reader.onload = function (e) {
          // Add the file name to the data URL
          let dataURL = e.target.result;
          dataURL = dataURL.replace(";base64", `;name=${file.name};base64`);

          //let plaintext = new Buffer(dataURL);
          //const ethPubKey = '3247b9f9ff4bf025a7f2a378f88ea2cd57ec4fe9e79dd6163609d88336713d3ebf8ac1e5359610631f4d33415ad9dd68fd54bf41489b0c7d51fe4ea499c1e8a2'
          //encryptIt(ethPubKey, plaintext);

          resolve({file, dataURL});
        };

        reader.readAsDataURL(file);
      });
    }

    onDrop(data) {
        //console.log(data)
        this.setState({
            pictures: data,
        });

        if (data.length>0){
            this.readFile(data[0]);
        }

        if (this.state.pictures.length>0){
            this.setState({
                step: 0,
                doneClass: 'done-button deactive'
            });
        } else {
            this.setState({
                step: 1,
                doneClass: 'done-button active'
            });
        }
    }

    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }

    render() {
      return (
          <div>
            <div className="container">
                <div className="profile-container">
                    <img src={image} className="profile-image" />
                    <h2 className="win">Winner <img src={winner_icon} className="winner-icon" /></h2>
                    <h4>{sale_price}</h4>
                    <h3>{winner_name}</h3>
                    <p className="location">{winner_location}</p>
                </div>
                <div className="steps-container">
                  <Steps current={this.state.step}>
                    <Steps.Step title="Image" />
                    <Steps.Step title="Submit" />
                  </Steps>

                  <ImageUploader
                      withIcon={true}
                      buttonText='Choose an image'
                      onChange={this.onDrop}
                      imgExtension={['.jpg', '.gif', '.png', '.gif']}
                      maxFileSize={5242880}
                      withPreview={true}
                      accept={".jpg,.jpeg',.gif,.png,.mp4,.mov,.m4v"}
                  />

                  <button className={this.state.doneClass}>
                    Submit
                  </button>
                </div>
            </div>
        </div>
      )
  }
}

export default Celebrity
