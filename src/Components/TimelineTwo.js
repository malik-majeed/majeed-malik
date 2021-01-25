import React from "react"

import '../App.css';
import 'antd/dist/antd.css';

import { Steps } from 'antd';

const { Step } = Steps;
class TimelineTwo extends React.Component {

    render() {
        return (
            <>
            <Steps progressDot current={8} direction="vertical">
              <Step title="Daimler Protics" description="10/2019–03/2020: Bachelorarbeit" />
              <Step title="Bosch Engineering" description="03/2020–09/2020: PreMaster Technische Projektkoordination" />
              <Step title="Masterstudium" description="2020-2022: Informationsmanagement und Data Science (M. Sc.) Hochschule Heilbronn" />
              <Step title="Kaufland" description="10/2020-Aktuell: Werkstudent Prozessmanagement" />
            </Steps>
          </>
        )
    }
}

export default TimelineTwo
