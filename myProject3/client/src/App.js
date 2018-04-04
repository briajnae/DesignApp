import React, { Component } from 'react';
import { Col, Row, Grid, Button } from 'react-bootstrap';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
// import TemplatePage from "./components/TemplatePage";
// import CustomBar from "./components/CustomBar";
// import StartPage from "./components/Start";
import TemplatePreview from "./components/TemplatePreview";

import Sliders from "./components/Slider";
// import Template_A from "./components/TEMP-A";
// import Template_B from "./components/TEMP-B";
import "./utils/API";

class App extends Component {
  render() {
    return (
    
      < div className=" row App">

     
      {/* <TemplatePage /> */}

      <TemplatePreview />

  
       
       {/* <Template_B /> */}
     {/* <StartPage />       */}
      </div>
    );
  }
}

export default App;
