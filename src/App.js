import React, { useState } from 'react';

import Form from './components/Form';
import Results from './components/Results';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <Form onData={setData} />
        <Results {...data} />
        <code>
          <span>
            The following is assumed and extended to the data user provides.
          </span>
          <pre>
{`region: {
  name: "Africa",
  avgAge: 19.7,
  avgDailyIncomeInUSD: 5,
  avgDailyIncomePopulation: 0.71
}`}
          </pre>
        </code>
      </header>
    </div>
  );
}

export default App;
