import React from 'react';
import Animal from "./components/Animal";
import Counter from "./components/Counter";
import WindowSize from './components/WindowSize';
import GetDataFromAPI from './components/GetDataFromAPI';

function App() {
 
  return (
    <div className="App">
      <Animal />
      <Counter />
      <WindowSize />
      <GetDataFromAPI/>
    </div>
  );
}





export default App;
