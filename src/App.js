
import React from 'react';
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent';

const App = () => {
 return (
  <div className="App">
        <FirstComponent />
        <SecondComponent name = "Faizan" Department = "Software Engineering" />
  </div>
 );
};
export default App;