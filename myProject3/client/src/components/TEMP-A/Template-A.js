import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Col, Row, Grid, Button, Glyphicon, Jumbotron, Image, Navbar } from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group';
import Scrollspy from "react-scrollspy";
import API from '../../utils/API';
import "./Template-A.css";
import NavBar from "../NavBar"; 

class Template_A extends Component {

    render() {
      
      return (

   <div className="temp-a">
  
    
    <Jumbotron className=" temp-a-jumbo">

        <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
            <li><a href="#section-1">section 1</a></li>
            <br/>
            <li><a href="#section-2">section 2</a></li>
            <br/>
            <li><a href="#section-3">section 3</a></li>
        </Scrollspy>
    
    </Jumbotron>
   
    <div className="sectoin-div">
        <section id="section-1">section 1</section>
        <section id="section-2">section 2</section>
        <section id="section-3">section 3</section>
    </div> 
    
   </div> 


      );
    }
  }
  
  export default Template_A;