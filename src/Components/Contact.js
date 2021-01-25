
import React from "react"

import 'antd/dist/antd.css';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'

class Contact extends React.Component {

    render() {
        return (
            <div style={{textAlign: 'left', paddingLeft: 50}}>
                <h2>Majeed Malik</h2>
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
                </div>
            </div>
        )
    }
}

export default Contact
