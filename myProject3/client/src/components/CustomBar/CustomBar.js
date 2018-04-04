import React, { Component } from "react";
import { Col, Row, Grid, Button } from 'react-bootstrap';
import "./CustomBar.css";
import FontButton from "../FontButton/FontButton";
import GradientBtn from "../GradientButton/Gradient";
import FormBtn from "../Form/FormBtn";



class CustomBar extends Component {
    render(){
        return(
            
   <Col sm={12} md={12} className="bar">

  

            <Col className="gradient-ctrl" sm={6} md={6}>
            <GradientBtn />
            </Col>
            
            <Col className="font-ctrl" sm={6} md={6}>
            
                <FontButton />
                
            </Col>

    </Col>



        )
    }
}

export default CustomBar;