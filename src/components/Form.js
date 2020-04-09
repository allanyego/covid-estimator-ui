import React, { useState } from 'react';

import covidEstimator from '../util/estimator';
import Button from './Button';
import Input from './Input';
import SelectInput from './SelectInput';

import './Form.css';
import './Input.css';

function sleep() {
  return new Promise((resolve, _reject) => {
    setTimeout(resolve, 3500);
  });
}

export default function Form({onData}) {
  const [population, setPopulation] = useState('');
  const [reportedCases, setReportedCases] = useState('');
  const [timeToElapse, setTimeToElapse] = useState('');
  const [periodType, setPeriodType] = useState('days');
  const [totalHospitalBeds, setTotalHospitalBeds] = useState('');
  const [loading, setLoading] = useState(false);

  function onPopulationChange(event) {
    setPopulation(event.target.value);
  }
  function onReportedCasesChange(event) {
    setReportedCases(event.target.value);
  }
  function onTimeToElapseChange(event) {
    setTimeToElapse(event.target.value);
  }
  function onPeriodTypeChange(event) {
    setPeriodType(event.target.value);
  }
  function onTotalHospitalBedsChange(event) {
    setTotalHospitalBeds(event.target.value);
  }

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);

    
    const requestData = {
      population,
      reportedCases,
      timeToElapse,
      periodType,
      totalHospitalBeds,
      region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
      }
    }
    
    await sleep();
    const responseData = covidEstimator(requestData);
    setLoading(false);

    onData(responseData);
  }

  return (
    <div className="FormContainer">
      <form onSubmit={onSubmit}>

        <Input
          placeholder="population"
          name="population"
          value={population}
          onChange={onPopulationChange}
          type="number"
          required
          min={1} />
        <Input
          placeholder="reported cases"
          name="reported-cases"
          value={reportedCases}
          onChange={onReportedCasesChange}
          type="number"
          required
          min={1} />
        <Input
          placeholder="time to elapse"
          name="time-to-elapse"
          value={timeToElapse}
          onChange={onTimeToElapseChange}
          type="number"
          required
          min={1} />
        <SelectInput
          name="period-type"
          value={periodType}
          onChange={onPeriodTypeChange} />
        <Input
          placeholder="total hospital beds"
          name="total-hospital-beds"
          value={totalHospitalBeds}
          onChange={onTotalHospitalBedsChange}
          type="number"
          required
          min={1} />

        <div className="Btn-container">
          <Button
            value="Get estimate"
            loading={loading} />
        </div>
      </form>
    </div>
  );
}