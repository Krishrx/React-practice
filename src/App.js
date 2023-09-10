
function App() {
 
  return (
    <div className="App">
      <User firstName='Kali' lastName='Krishna' country='Finland' />
      
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>
        {props.firstName} {props.lastName}
      </h1>
      <small>{props.country}</small>
    </div>
  )
}




export default App;
