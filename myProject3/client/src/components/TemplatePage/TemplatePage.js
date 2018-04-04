import React, { Component } from "react";
import { Col, Row, Grid } from 'react-bootstrap';
import TemplateList from "../TemplateList";
import Footer from "../Footer";
import "./TemplatePage.css";


class TemplatePage extends Component {
    render(){
        return(
        <Grid>

            <Row className="temp-header">
                <Col className="logo-temp" sm={2} md={3}>
                </Col>
                <Col className="menu" sm={3} md={6} xsOffset={3}>
                </Col>
            </Row>

          <TemplateList />
          <Footer />
        </Grid>


        )
    }
}




export default TemplatePage;