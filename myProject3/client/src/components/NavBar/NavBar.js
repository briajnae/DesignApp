import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Col, Row, Grid, Button, Glyphicon, Jumbotron, Image, Navbar, NavItem, Nav } from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group';
import API from '../../utils/API';


class NavBar extends Component {

    render() {
      
      return (

        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">logo</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
        </Nav>
      </Navbar>


      );
    }
  }
  
  export default NavBar;