import React from 'react'
import '../App.css'
import { Container, Row, Col } from 'react-bootstrap'
import {ImYoutube2,ImFacebook2,ImTwitter,ImLinkedin2} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
    return (
        <div className="foot">
            <Container>
                <Row>
                    <Col style={{textAlign:'center'}}>@{(new Date().getFullYear())} copyright.
                    <h3>ALl Rights Reserved.</h3>
                    </Col>
                    <Col>
                        <li>About us</li>
                      <li>Terms of Service</li>
                      <li>Privacy Policy</li>
                      <li>Cookie Policy
                      </li>
                      </Col>
                    <Col >
                        <ImYoutube2 className="social"/>
                        <ImFacebook2 className="social"/>
                        <ImTwitter className="social"/>
                        <BsInstagram className="social"/>
                        <ImLinkedin2 className="social"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
