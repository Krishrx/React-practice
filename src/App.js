import React,{Component} from 'react';
function App() {
 
  return (
    <div className="App">
      <Btn fn={greet} />
      <Btn2 fn={handleTime} />
      <SkillList />
      <Counter />
      <Animal/>
    </div>
  );
}

const greet = () => {
  alert('hii kali');
}

const handleTime = () => {
  alert(showDate(new Date()))
}

const Btn = (props) => {

  return (
    <button onClick={props.fn} className="bg-teal-500 px-4 py-2 rounded-md m-4">Click</button>
  )
}

const Btn2 = (props) => {
  return (
    <button onClick={props.fn} className="bg-teal-500 px-4 py-2 rounded-md m-4">Show Date</button>
  )
}

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}


const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
]

const Skill = ({ skill: [lang, level] }) => <li key={lang}>{lang} {level}</li>

class SkillList extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    const totalSkillList = skills.map((s) => <Skill skill={s} key={s[0]} />);
    return (
      <ul>{totalSkillList}</ul>
    )
  }
}

class Counter extends Component{
  constructor(props) {
    super(props);
  }
  state = {
    count: 0,
    age:5
  }

  plus = () => {
   this.setState(
      {
        count: this.state.count + 1,
        age: this.state.age + 5
      }
    )
  }

  minus = () => {
    this.setState(
      {
        count: this.state.count - 1,
        age: this.state.age - 5 
      }
    )
  }

  render() {

    return (
      <div>
        <h1>{this.state.count}</h1>
        <h2>age:{this.state.age }</h2>
        <button onClick={this.plus} className="bg-teal-500 px-4 py-2 rounded-md m-4">Incre</button>
        <button onClick={this.minus} className="bg-teal-500 px-4 py-2 rounded-md m-4">Decre</button>
      </div>
    );
  }

}

class Animal extends Component{
  constructor(props) {
    super(props);
  }
  state = {
    animal: 'dog',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThL-JlF3_d--7-Y2Q_-r3veHouCfIsKlKg-T_8w3uONap8P9mB84MCpZaXAoAGfo-5ubE&usqp=CAU'
  }
  changeAnimal = () => {
    let caturl = 'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg';
    let dogurl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThL-JlF3_d--7-Y2Q_-r3veHouCfIsKlKg-T_8w3uONap8P9mB84MCpZaXAoAGfo-5ubE&usqp=CAU';
    if (this.state.animal === 'dog') {
      this.setState({
        animal: 'cat',
        url:caturl
      })
    }
    else {
      this.setState({
        animal: 'dog',
        url: dogurl
      })
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.animal}</h1>
        <img src={this.state.url} alt="animal" className='w-36 h-24'/>
        <button onClick={this.changeAnimal} className="bg-teal-500 px-4 py-2 rounded-md m-4">Change Animal</button>
      </div>
    );
  }
}




export default App;
