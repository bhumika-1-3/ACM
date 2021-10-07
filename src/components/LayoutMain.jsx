import React from 'react'
import "../App.css"
import { DiJavascript, DiDjango } from 'react-icons/di'
import { GrJava } from 'react-icons/gr'
import { ImHtmlFive } from 'react-icons/im'
import { FaPython, FaReact } from 'react-icons/fa'
import { BsPlusLg } from 'react-icons/bs'
import { Container, Row, Col } from 'react-bootstrap'
import {HiChat} from 'react-icons/hi'

const icon={
    fontSize:'2.2rem',
    margin:'10%',
    color:'#F13463'
}

const LayoutMain = () => {
    
    return (
        <div className="layout">
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg md={12}>
                        <h1>Signficant Hackathon</h1>
                        <span style={{color:'#F13463'}}>Learn | Teach | Explore</span>
                    </Col>
                    <Col lg={8} md={12}>
<img src="https://i.pinimg.com/originals/38/a0/cc/38a0cc030a73b8592057bd7d01bfd56d.gif" alt=''/>
                    </Col>
                    <Col md={12} lg>
                        <center>
                        <h5>
                            Show us the unique point that you have
                        </h5>
                        <br/>
                        <Container>
                            <Row>
                                <Col xs={4}><DiJavascript style={icon} /></Col>
                                <Col xs={4}><ImHtmlFive style={icon}/></Col>
                                <Col xs={4}><FaPython style={icon}/></Col>
                            </Row>
                            <Row>
                                <Col xs={4}><DiDjango style={icon}/></Col>
                                <Col xs={4}><FaReact style={icon}/></Col>
                                <Col xs={4}><GrJava style={icon}/></Col>
                            </Row>
                        </Container>
                        <div className="addSkills">
                          <span><BsPlusLg /></span>
                        </div>
                        </center>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LayoutMain
