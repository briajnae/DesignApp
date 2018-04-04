import React, { Component } from "react";
import { Col, Row, Grid, Jumbotron } from 'react-bootstrap';
import CustomBar from "../CustomBar";
import TemplateContainer from "../TemplateContainer";
import FontButton from "../FontButton";
import "./TemplatePreview.css";
import Footer from "../Footer/Footer";
import Jumbo from "../Start/Start";


class TemplatePreview extends Component {
    render(){
        return(
        <Grid fluid>
<Jumbo />

            <CustomBar />

            <Footer />
        </Grid>


        )
    }
}




export default TemplatePreview;