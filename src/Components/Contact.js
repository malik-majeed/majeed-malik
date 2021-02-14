
import React from "react"
import Picture from "../images/majeed_malik.jpg"
import 'antd/dist/antd.css';
import { GithubOutlined, LinkedinOutlined, MailOutlined, BookOutlined } from '@ant-design/icons'
import { Row, Col, Avatar } from 'antd';

class Contact extends React.Component {

    render() {
        return (
            <div style={{textAlign: 'left'}}>
                    <Row>
                        <Col xs={0} sm={0} md={0} lg={0} xl={0}></Col>
                        <Col xs={6} sm={5} md={6} lg={5} xl={4}>
                            <Avatar size={150} src={Picture}/>
                        </Col>
                        <Col xs={16} sm={0} md={0} lg={0} xl={0}></Col>
                        <Col xs={24} sm={0} md={0} lg={0} xl={0} style={{paddingTop: '15px'}}></Col>
                        <Col xs={0} sm={0} md={0} lg={0} xl={0}></Col>
                        <Col xs={24} sm={15} md={14} lg={11} xl={12}>
                        <div>
                            <h2>Majeed Malik</h2>
                            <BookOutlined style={{ fontSize: '25px', color: '#1471c7', paddingRight: '10px' }}/> <h2 style={{display: 'inline'}}>Wirtschaftsinformatik</h2>
                            <br/>
                            <LinkedinOutlined style={{ fontSize: '25px', color: '#1471c7', paddingRight: '10px' }}/> <a href="https://www.linkedin.com/in/majeed-malik-9411ba153/" style={{textDecoration: 'none', color: 'black'}}><h2 style={{display: 'inline'}}>LinkedIn</h2></a>
                            <br/>
                            <GithubOutlined style={{ fontSize: '25px', color: '#1471c7', paddingRight: '10px' }}/> <a href="https://github.com/malik-majeed" style={{textDecoration: 'none', color: 'black'}}><h2 style={{display: 'inline'}}>GitHub Profil</h2></a>
                            </div>
                        </Col>
                        <Col xs={2} sm={4} md={4} lg={8} xl={8}></Col>
                    </Row>
                {/* <h2>Majeed Malik</h2>
                <h3>Wirtschaftsinformatik</h3>
                <h4 style={{paddingTop: 20}}>Herbststraße 27</h4>
                <h4>74072 Heilbronn</h4>
                <div style={{ fontSize: "30px", paddingTop: 20 }}>
                    <a href="https://github.com/malik-majeed" target="_blank" rel="noreferrer" alt="Github" style={{ color: "inherit" }}>
                        <GithubOutlined style={{ padding: 20 }} />
                    </a>
                    <a href="https://de.linkedin.com/in/majeed-malik-9411ba153" target="_blank" rel="noreferrer" alt="LinkedIn" style={{ color: "inherit" }}>
                        <LinkedinOutlined style={{ padding: 20 }} />
                    </a>
                    <a href="mailto:Majeedmalik1997@gmail.com" target="_blank" rel="noreferrer" alt="Mail" style={{ color: "inherit" }}>
                        <MailOutlined style={{ padding: 20 }} />
                    </a>
                </div> */}
            </div>
        )
    }
}

export default Contact
