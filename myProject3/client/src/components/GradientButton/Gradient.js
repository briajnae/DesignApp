import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Col, Row, Grid, Button } from 'react-bootstrap';
// import Slider from 'material-ui/Slider';
// import Sliders from "../Slider/Slider";
import "./Gradient.css";
import Slider from 'material-ui/Slider';




class GradientBtn extends Component {

    state ={
      gradients:[],
      gradientStyle: " "
     
    };
 
    handleFontSubmit = event => {            
            event.preventDefault();
            this.newGradient(this.state.gradients);
            
       };


       newGradient = () => {

        let hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
        
        function populate(a) {
          for ( let i = 0; i < 6; i++ ) {
            let x = Math.round( Math.random() * 14 );
            let y = hexValues[x];
            a += y;
          }
          return a;
        }
        
        let newColor1 = populate('#');
        let newColor2 = populate('#');
        let angle = Math.round( Math.random() * 360 );
        
        let gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
        
        document.getElementById("grad-try").style.background = gradient;
        document.getElementById("output").innerHTML = gradient;
        
      }
      
      
   
    render() {
    
      return (

  <Col md={5} id="grad-try">
        <button id="grad-btn" onClick={this.handleFontSubmit}>gradient</button>
        <p id="output"> </p>
        <button id="grad-btn" onClick={this.handleFontSubmit}>gradient</button>
      
        <input id="try" type="range" min="1" max="100" value="50" />
    
  </Col>
      );
    }
  }
  
  export default GradientBtn;

