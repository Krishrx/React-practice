import React from 'react';
import CountryContainer from './components/FetchCountryTask/CountryContainer';
import About from './components/FetchCountryTask/pages/About';
import Login from './components/FetchCountryTask/pages/Login';
import Register from './components/FetchCountryTask/pages/Register';
import Error from './components/FetchCountryTask/pages/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Main from './components/HexColorGenerator/Main';
// import Main from './components/useReducer/Main'
import Main from './components/Router/Main'
function App() {

  return (
      
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<CountryContainer />}/>
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      {/* <Main/> */}
      {/* <Main/> */}
      <Main/>
      
    </>
  );
}





export default App;
