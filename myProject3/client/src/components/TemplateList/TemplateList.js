import React, { Component } from "react";
import { Col, Row, Grid } from 'react-bootstrap';
import "./TemplateList.css";


class TemplateList extends Component {
    render(){
        return(
            <Row className="temp-grid" >

                <Col className="temp-card" sm={6} md={6}>
                </Col>
                
                <Col className="temp-card2" sm={6} md={6}>
                </Col>
            
            </Row>
        )
    }
}




export default TemplateList;