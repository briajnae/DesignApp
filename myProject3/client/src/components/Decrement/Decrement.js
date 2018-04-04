import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Col, Row, Grid, Button, Glyphicon } from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group';
import { fadeIn, bounce } from 'react-animations'
import API from '../../utils/API';




class FontBackBtn extends Component {



    state ={
      fonts:[],
      fontStyle: " ",
      fontName: " ",
      allFonts: [],
     
    };
 
    handleFontDecrement = event => {            
        event.preventDefault();
        this.searchFonts(this.state.search);
         
   };

       searchFonts = (i) => {
        API.search(i)
        .then(res => this.setState({ fonts: res.data }))
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
        console.log(newArr);

      
       
  
        
        this.setState({
          fontStyle: use,
          fontName: newFont,
          allFonts: newArr, 
        })
        console.log(this.state);
        

      
     
     
        console.log(newArr.length);
        
        
        const yes = event => {
        
         console.log(newArr.length);
     
    };
    return newArr;
        })
  
      }

      

    

    render() {
      let fontStyle = this.state.fontStyle
      let fontName = this.state.fontName
      let count = this.setState.newArr;
      return (
     
    <button id="back" onClick={this.handleFontDecrement}><Glyphicon glyph="chevron-left" /></button>
  
      );
    }
  }
  
  export default FontBackBtn;