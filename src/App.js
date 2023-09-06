import './App.css';
function App() {
 
  return (
    <div className="App">
      {div1}
      {div2}
      {div3}
      {div4}
    </div>
  );
}

const div1 = (
  <div>
    <h1 className='heading'>Subscribe</h1>
  </div>
);

const div2 = (
  <div>
    <h3 className='headText'>Sign up with your email address to recieve news and updates.</h3>
  </div>
);

const div3 = (
  <div className='cont'>
    <input type='text' placeholder='First name'/>
    <input type='text' placeholder='Last name'/>
    <input type='text' placeholder='Email'/>
  </div>
);

const div4 = (
  <div>
    <button className='btn'>Subscribe</button>
  </div>
);


export default App;
