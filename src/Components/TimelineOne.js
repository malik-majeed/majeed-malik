import React from "react"

import '../App.css';
import 'antd/dist/antd.css';

import { Steps } from 'antd';

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
            <Steps progressDot current={8} direction="vertical">
              <Step title="Abitur" description="2008-2016: Justinus-Kerner Gymnasium" />
              <Step title="Bachelorstudium" description="2016-2020: Wirtschaftsinformatik (B. Sc.) Hochschule Heilbronn" />
              <Step title="Lidl Digital" description="05/2017-09/2017: Werkstudent Frontend-Entwicklung" />
              <Step title="Connect.IT e.V." description="10/2017-07/2018: Werkstudent Unternehmensberatung" />
              <Step title="Bosch Engineering" description="08/2018-09/2019: Werkstudent & Praktikant Projektmanagement" />
            </Steps>
          </>
        )
    }
}

export default TimelineOne
