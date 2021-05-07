import React, { ReactElement, useEffect, useState } from 'react';

interface Props {
  progress: number;
  title: string;
}

function progressbar({ progress, title }: Props): ReactElement {
  // const [progress, setprogress] = useState(getProgress);

  return (
    <div className="container-pro">
      <h1>{title}</h1>
      <div className="progressbar-container">
        <div className="progressbar-complete" style={{ width: `${progress}%` }}>
          <div className="progressbar-liquid" />
        </div>
        <span className="progress">{progress}%</span>
      </div>
    </div>
  );
}

export default progressbar;
