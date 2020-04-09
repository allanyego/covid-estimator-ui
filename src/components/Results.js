import React, { useState } from 'react';

import Result from './Result';
import Button from './Button';

import ambulance from '../assets/ambulance.png';
import hourGlass from '../assets/hourglass.png';
import icu from '../assets/intensive_care_unit.png';
import oxygen from '../assets/oxygen_tank.png';
import money from '../assets/money.png';
import reported from '../assets/reported.png';
import stretcher from '../assets/stretcher.png';
import './Results.css';

export default function Results({
  impact,
  severeImpact
}) {
  const [isVisible, setIsVisible] = useState(true);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  if (!impact) {
    return null;
  }

  if (!isVisible) {
    return (
      <div className="Hover-btn">
        <Button value="Recent" size="sm" onClick={toggleVisibility} />
      </div>
    );
  }

  return (
    <div>
      <section className="Results">
        <Button value='x' onClick={toggleVisibility} />
        <Result
          imgSource={reported}
          label={'Currently infected'}
          best={impact.currentlyInfected}
          worst={severeImpact.currentlyInfected} />

        <Result
          imgSource={hourGlass}
          label={'Infections by time'}
          best={impact.infectionsByRequestedTime}
          worst={severeImpact.infectionsByRequestedTime} />
        <Result
          imgSource={icu}
          label={'ICU cases by time'}
          best={impact.casesForICUByRequestedTime}
          worst={severeImpact.casesForICUByRequestedTime} />

        <Result
          imgSource={oxygen}
          label={'Ventilation cases by time'}
          best={impact.casesForVentilatorsByRequestedTime}
          worst={severeImpact.casesForVentilatorsByRequestedTime} />
        <Result
          imgSource={ambulance}
          label={'Severe cases by time'}
          best={impact.severeCasesByRequestedTime}
          worst={severeImpact.severeCasesByRequestedTime} />

        <Result
          imgSource={stretcher}
          label={'Hospital beds by time'}
          best={impact.hospitalBedsByRequestedTime}
          worst={severeImpact.hospitalBedsByRequestedTime} />
        <Result
          imgSource={money}
          label={'Dollars in flight'}
          best={impact.dollarsInFlight}
          worst={severeImpact.dollarsInFlight} />
      </section>
    </div>
  );
}