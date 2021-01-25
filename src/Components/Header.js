
import React from "react"

import '../App.css';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"


const { Header } = Layout;
class TopHeader extends React.Component {

    render() {
        return (
            <div className="App">
                <Header>
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="1">
                            <a href="/" rel="noopener noreferrer">
                                Home
                            </a>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <a href="/#reference" rel="noopener noreferrer">
                                Referenzen
                            </a>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <a href="/#projects" rel="noopener noreferrer">
                                Projekter
                            </a>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <a href="/kontakt" rel="noopener noreferrer">
                                Kontakt
                            </a>
                        </Menu.Item>
                        <Menu.Item key="5">Impressum</Menu.Item>
                    </Menu>
                </Header>
            </div>
        )
    }
}

export default TopHeader
