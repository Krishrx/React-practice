
function App() {
 
  return (
    <div className="App">
      <Btn fn={greet} />
      <Btn2 fn={handleTime} />
      <SkillList/>
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

const SkillList = () => {
  const totalSkillList = skills.map((s) => <Skill skill={s} key={s[0]} />);
  return (
    <ul>{totalSkillList}</ul>
  )
}


export default App;
