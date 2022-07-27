import React  from 'react';

import './App.css';
import Parent from './Parent';

function App() {
  const [p,setp] = React.useState("edupoly")
  return (
    <div className="betterview">
      <h1>Welcome to React Applications</h1>
      <Parent j={p}></Parent>
    </div>
  );
}

export default App;
