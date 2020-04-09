import React from 'react';

export default function Result({imgSource, label, best, worst}) {
  return(
    <article>
        <div>
          <img src={imgSource} alt={`${label}-icon`} />
        </div>
        <div className="data">
          <div>
            {label}
          </div>
          <div className="best-case">
            <strong>{best.toFixed(4)}</strong>
          </div>
          <div className="worst-case">
            <strong>{worst.toFixed(4)}</strong>
          </div>
        </div>
      </article>
  );
}