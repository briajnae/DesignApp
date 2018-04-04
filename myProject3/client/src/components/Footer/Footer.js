import React, { Component } from "react";
import { Col, Row, Grid } from 'react-bootstrap';
import cs from "../../Assets/Images/cs.png"
import logo from "../../Assets/Images/logo.png"
import "./Footer.css";



class Footer extends Component {

    render() {
        return(

<div  className="row footer">

<img id="cs-logo" className="img-responsive" src={cs}/>

</div>


        )
    }

}

export default Footer;