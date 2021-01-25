
import React from "react"

import '../App.css';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { HashRouter , Switch, Route } from "react-router-dom"


const { Header } = Layout;
class TopHeader extends React.Component {

    render() {
        return (
            <div className="App">
                <HashRouter basename='/'>
                <Header>
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="1">
                            <a href="/majeed-malik/" rel="noopener noreferrer">
                                Home
                            </a>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <a href="/majeed-malik/#reference" rel="noopener noreferrer">
                                Referenzen
                            </a>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <a href="/majeed-malik/#projects" rel="noopener noreferrer">
                                Projekte
                            </a>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <a href="/majeed-malik/#contact" rel="noopener noreferrer">
                                Kontakt
                            </a>
                        </Menu.Item>
                        <Menu.Item key="5">Impressum</Menu.Item>
                    </Menu>
                </Header>
                </HashRouter>
            </div>
        )
    }
}

export default TopHeader
