
import React from "react"

import './App.css';
import TopHeader from './Components/Header.js'
import ImageCarousel from './Components/Carousel.js'
import ProjectCard from './Components/Card.js'
import TimelineOne from './Components/TimelineOne.js'
import TimelineTwo from './Components/TimelineTwo.js'
import Contact from './Components/Contact.js'
import Picture from './images/majeed_malik.jpg'
import { Row, Col } from 'antd';
import { Card, Divider } from 'antd';

import { Layout } from 'antd';
import 'antd/dist/antd.css';
const { Content, Footer } = Layout;

class Home extends React.Component {

    render() {
        return (
            <div className="App">
                <Layout className="layout">
                    <TopHeader></TopHeader>
                    <Content style={{ padding: '50px' }}>
                        <div className="site-layout-content">
                            <ImageCarousel></ImageCarousel>
                            <Row style={{ padding: '50px' }}>
                                <Col xs={24} xl={11}>
                                    <Card title="Über mich">
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                        </p>
                                    </Card>
                                </Col>
                                <Col xs={24} xl={2}></Col>
                                <Col xs={24} xl={11}>
                                    <Card title="Meine Interessen">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    </Card>
                                </Col>
                            </Row>
                            <Row style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                                <Divider />
                            </Row>
                            <Row style={{ padding: '50px' }} id="reference">
                                <Col span={24} style={{ paddingBottom: '25px', textAlign: 'left' }}>
                                    <h1>Meine bisherigen Stationen</h1>
                                </Col>
                                <Col xs={24} xl={11}>
                                    <TimelineOne></TimelineOne>
                                </Col>
                                <Col xs={24} xl={2}></Col>
                                <Col xs={24} xl={11}>
                                    <TimelineTwo></TimelineTwo>
                                </Col>
                            </Row>
                            <Row style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                                <Divider />
                            </Row>
                            <Row style={{ padding: '50px' }} id="projects">
                                <Col span={24} style={{ paddingBottom: '10px', textAlign: 'left' }}>
                                    <h1>Auswahl realisierter Projekte</h1>
                                </Col>
                                <Col xs={24} xl={8}><ProjectCard name="ÖPNV-Transparenzregister"></ProjectCard></Col>
                                <Col xs={24} xl={8}><ProjectCard name="Project 2"></ProjectCard></Col>
                                <Col xs={24} xl={8}><ProjectCard name="Project 3"></ProjectCard></Col>
                            </Row>
                            <Row style={{ padding: '50px' }} id="contact">
                            <Col span={24} style={{ paddingBottom: '25px', textAlign: 'left' }}>
                                    <h1>Kontakt</h1>
                                </Col>
                                <Col xs={12} xl={3}><img src={Picture} style={{ height: '100', width: '100%' }} alt="Majeed Malik" /></Col>
                                <Col xs={12} xl={21}>
                                    <Contact></Contact>
                                </Col>
                            </Row>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Majeed Malik © 2021</Footer>
                </Layout>
            </div>
        )
    }
}

export default Home
