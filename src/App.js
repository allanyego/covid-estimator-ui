import React, { useState, Suspense } from 'react';

import PaintLoader from './components/PaintLoader';
import './App.css';

const Form = React.lazy(() => import('./components/Form'));
const Results = React.lazy(() => import('./components/Results'));

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<PaintLoader />}>
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
        </Suspense>
      </header>
    </div>
  );
}

export default App;
