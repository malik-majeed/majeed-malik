
import React from "react"

import 'antd/dist/antd.css';
import Picture from '../images/majeed_malik.jpg'

import TopHeader from './Header'
import { Row, Col } from 'antd';

import { Layout } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'
import { Typography } from 'antd';
const { Title } = Typography;
const { Content, Footer } = Layout;

class Home extends React.Component {

    render() {
        return (
            <div>
                <Layout className="layout">
                    <TopHeader></TopHeader>
                    <Content style={{ padding: '50px' }}>
                        <div className="site-layout-content">
                            <Row style={{ padding: '50px' }}>
                                <Col span={6}><img src={Picture} style={{ height: '300', width: '100%' }} alt="Majeed Malik"/></Col>
                                <Col span={16} style={{ paddingLeft: '40px' }}>
                                    <Title level={2}>Majeed Malik</Title>
                                    <Title level={4}>Wirtschaftsinformatik</Title>
                                    <Title level={4}>Herbststraße 27</Title>
                                    <Title level={4} style={{margin: '0'}}>74072 Heilbronn</Title>
                                    <div style={{ fontSize: "30px", paddingTop: 20}}>
                                        <a href="https://github.com/malik-majeed" target="_blank" rel="noreferrer" alt="Github" style={{color: "inherit"}}>
                                            <GithubOutlined style={{ padding: 20 }} />
                                        </a>
                                        <a href="https://de.linkedin.com/in/majeed-malik-9411ba153" target="_blank" rel="noreferrer" alt="LinkedIn" style={{color: "inherit"}}>
                                            <LinkedinOutlined style={{ padding: 20 }} />
                                        </a>
                                        <a href="mailto:Majeedmalik1997@gmail.com" target="_blank" rel="noreferrer" alt="Mail" style={{color: "inherit"}}>
                                            <MailOutlined style={{ padding: 20 }} />
                                        </a>
                                    </div>
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
