import React from 'react';
import Animal from "./components/useState/Animal";
import Counter from "./components/useState/Counter";
import WindowSize from './components/useEffect/WindowSize';
import GetDataFromAPI from './components/useEffect/GetDataFromAPI';
import Parent from './components/useContext/Parent';

function App() {

  return (
    <div className="App">
      {/*useState*/}
      {/* <Animal />
      <Counter /> */}

      {/*useEffect*/}
      {/* <WindowSize />
      <GetDataFromAPI /> */}
      
      {/*useContext*/}
      <Parent/>

    </div>
  );
}





export default App;
