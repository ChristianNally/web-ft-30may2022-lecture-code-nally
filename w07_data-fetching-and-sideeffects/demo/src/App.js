import './App.css';
import React from 'react';
import UseEffectDemo from './components/UseEffectDemo';

function App() {

  const [checked,setChecked] = React.useState(false);

  return (
    <div className="App">
      <label htmlFor="ued">Check to include UseEffectDemo Component</label>
      <input
        id="ued"
        type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      { checked && <UseEffectDemo />}
    </div>
  );
}

export default App;
