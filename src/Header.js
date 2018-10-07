import React, {PureComponent} from 'react'
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import ModalComponent from './ModalComponent'

import logo from './lock.png'

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChangeValue = e => this.setState({value: e.target.value});

  render() {
    return(
        <Navbar inverse collapseOnSelect style={{display:"flex", flexDirection:"row"}}>
          <Navbar.Header>
            <h1>🔒 #itsasecret</h1>
            <Nav style={{display:"flex", flexDirection:"row"}} >
                <NavItem eventKey={1} href="/">Home</NavItem>
                <NavItem eventKey={2} href="/auctions">Auctions</NavItem>
                <NavItem href="/profile"><ModalComponent value={this.state.value} /></NavItem>
            </Nav>
          </Navbar.Header>
        </Navbar>
      );
  }
}
