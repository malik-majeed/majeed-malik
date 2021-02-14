import React from "react"

import '../App.css';
import 'antd/dist/antd.css';

import { Row, Col, Steps } from 'antd';

const { Step } = Steps;
class TimelineOne extends React.Component {

    render() {
        return (
            <>
            {/* <Steps progressDot current={7}>
              <Step title="Abitur" description="This is a description." />
              <Step title="Bachelor Studium" description="This is a description." />
              <Step title="Lidl Digital" description="This is a description." />
              <Step title="Connect.IT e.V." description="This is a description." />
              <Step title="Bosch Engineering" description="This is a description." />
              <Step title="Daimler Protics" description="This is a description." />
              <Step title="Bosch Engineering" description="This is a description." />              
              <Step title="Master Studium" description="This is a description." />
              <Step title="Kaufland" description="This is a description." />
            </Steps> */}
            <Row>
              <Col xs={0} sm={0} md={24} lg={24} xl={24}>
                <Steps progressDot current={8} direction="vertical">
                <Step title="Abitur" description="2008-2016: Justinus-Kerner Gymnasium" />
                <Step title="Bachelorstudium" description="2016-2020: Wirtschaftsinformatik (B. Sc.) Hochschule Heilbronn" />
                <Step title="Lidl Digital" description="05/2017-09/2017: Werkstudent Frontend-Entwicklung" />
                <Step title="Connect.IT e.V." description="10/2017-07/2018: Werkstudent Unternehmensberatung" />
                <Step title="Bosch Engineering" description="08/2018-09/2019: Werkstudent & Praktikant Projektmanagement" />
              </Steps>
            </Col>
            <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                <Steps progressDot current={8} direction="vertical">
                <Step title="Abitur" description="2008-2016: Justinus-Kerner Gymnasium" />
                <Step title="Bachelorstudium" description="2016-2020: Wirtschaftsinformatik (B. Sc.) Hochschule Heilbronn" />
                <Step title="Lidl Digital" description="05/2017-09/2017: Werkstudent Frontend-Entwicklung" />
                <Step title="Connect.IT e.V." description="10/2017-07/2018: Werkstudent Unternehmensberatung" />
                <Step title="Bosch Engineering" description="08/2018-09/2019: Werkstudent & Praktikant Projektmanagement" />
                <Step title="Daimler Protics" description="10/2019–03/2020: Bachelorarbeit"/>
                <Step title="Bosch Engineering" description="03/2020–09/2020: PreMaster Technische Projektkoordination" />
                <Step title="Masterstudium" description="2020-2022: Informationsmanagement und Data Science (M. Sc.) Hochschule Heilbronn" />
                <Step title="Kaufland" description="10/2020-Aktuell: Werkstudent Prozessmanagement" />
              </Steps>
            </Col>
            </Row>
          </>
        )
    }
}

export default TimelineOne
