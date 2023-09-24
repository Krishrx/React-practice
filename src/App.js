import React from 'react';
import Animal from "./components/useState/Animal";
import Counter from "./components/useState/Counter";
import WindowSize from './components/useEffect/WindowSize';
import GetDataFromAPI from './components/useEffect/GetDataFromAPI';
import Parent from './components/useContext/Parent';
import Country from './components/FetchCountryTask/Country';
import CountryContainer from './components/FetchCountryTask/CountryContainer';
import About from './components/FetchCountryTask/pages/About';
import Login from './components/FetchCountryTask/pages/Login';
import Register from './components/FetchCountryTask/pages/Register';
import Error from './components/FetchCountryTask/pages/Error';

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
      {/* <Parent/> */}

      {/* <CountryContainer/> */}
      {/* <About/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <Error/> */}
    </div>
  );
}





export default App;
