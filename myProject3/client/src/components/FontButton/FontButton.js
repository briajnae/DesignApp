import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Col, Row, Grid, Button, Glyphicon } from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group';
import { fadeIn, bounce } from 'react-animations'
import"./FontButton.css";
import FontBackBtn from "../Decrement/Decrement"
import API from '../../utils/API';




class FontButton extends Component {



    state ={
      fonts:[],
      fontStyle: " ",
      fontName: " ",
      allFonts: [],
     
    };
 
    handleFontSubmit = event => {            
            event.preventDefault();
            this.searchFonts(this.state.search);
             
       };

 
       searchFonts = (i) => {
        API.search(i)
        .then(res => this.setState({ fonts: res.data }))
        .then(res => this.setState({ allFonts: res.data }))
        .catch(err => console.log(err))
        .then(res => {
    
          let n = Math.floor(Math.random() * Math.floor(858));
          let num = n.toString();
          let newFont = this.state.fonts.items[num].family;
          let fontURL = this.state.fonts.items[num].files.regular; 
          
          console.log(newFont);  
          console.log(fontURL);

        
          
        const link = document.createElement("link");
     
        link.id = newFont;
        let use = "'"+newFont+"'";
        
        link.href = `https://fonts.googleapis.com/css?family=${link.id.replace(/ /g, "+")}`;
        link.rel = "stylesheet";
        document.head.appendChild(link);
        console.log("LINKED");
        console.log(link);
        console.log(link.id);
        console.log(use);
        let newArr = this.state.allFonts.concat(use);
        let newID = this.state.allFonts.length;
        console.log(newArr);
        
        this.setState({
          fontStyle: use,
          fontName: newFont,
          allFonts: newArr, 
        })
        console.log(this.state);
        console.log(newID);
        

      
     
        const test = event => {
        document.getElementById("try").style.font=use
        document.getElementById("fname").innerHTML= newFont;
        document.getElementById("back").then()
      };
        console.log(newArr.length);
     

        })
  
      }

      

    

    render() {
      let fontStyle = this.state.fontStyle
      let fontName = this.state.fontName
      let count = this.state.newArr;
      let allFonts = this.state.newArr;
      return (

    <Col>
   
    <h3 id="fname">{this.state.fontName} </h3>
    <h2 id="try" style={{fontFamily: fontStyle}}> The text is Regular style.</h2>
    <h3 id="try" style={{fontFamily: fontStyle}}> The text is Regular style.</h3>
    <h4 id="try" style={{fontFamily: fontStyle}}> The text is Regular style.</h4>
  
    <p id="try" style={{fontFamily: fontStyle}}> The text is Regular style.</p>
  
    <button id="fwd" onClick={this.handleFontSubmit}><Glyphicon glyph="chevron-right" /></button>

     
      <p> Click ">" to explore fonts</p>
        
    </Col> 
  
  
      );
    }
  }
  
  export default FontButton;



