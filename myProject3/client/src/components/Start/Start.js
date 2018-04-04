import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Col, Row, Grid, Button, Glyphicon, Jumbotron, Image } from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group';
import Footer from "../Footer/Footer";
import FormBtn from "../Form/Form";
import API from '../../utils/API';
import logo from "../../Assets/Images/logo.png"
import "./Start.css";



class Jumbo extends Component {

    render() {
      
      return (

 
       <div className="jumbo">
            <img id="logo" className="img-responsive" src={logo}/>
       
            <FormBtn />
       </div>

       
        
     
  


      );
    }
  }
  
  export default Jumbo;