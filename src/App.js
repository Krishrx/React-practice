
function App() {
 
  return (
    <div className="App">
      <Header/>
      <ColorBox />
    </div>
  );
}

const Header = () => {
  return (
    <div className="font-mono flex flex-col items-center justify-center m-4 space-y-2">
      <h1 className="font-bold text-4xl">30 Days Of React</h1>
      <h3 className="text-xl">Number Generator</h3>
    </div>
  )
}

const ColorBox = () => {
  const arr = populateArr();
  let colorBoxes = arr.map((colorBoxNum) => {
    let numStr = segregateNum(colorBoxNum);
    let color = (numStr === 'prime') ? 'red' : (numStr === 'even') ? 'green' : 'yellow';
    let style = `bg-${color}-500 w-20 h-20 flex justify-center items-center`;

    return (<div className={style}>
    {colorBoxNum}
    </div>)
  })


  return (
    <div className="w-6/12 mx-auto font-mono text-white font-bold text-2xl m-4 flex flex-wrap justify-center items-center gap-1">
      {colorBoxes}
    </div>
  )
}




const populateArr = () => {
  const arr = [];
  for (let i = 0; i <= 31; i++){
    arr[i] = i;
  }
  return arr;
}

const segregateNum = (num) => {
  if (isPrime(num)) return 'prime';
  if (num % 2 === 0) return 'even';
  if (num % 2 !== 0) return 'odd';
}

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++){
    if (num % i === 0) return false;
  }
  return true;
}


export default App;
