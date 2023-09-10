import avatar from './assets/avatar_portfolio_black.jpg';
import { CheckCircle2,Clock } from 'lucide-react';

function App() {
  return (
    <div>
      <div className='flex flex-col  justify-center m-4'>
        <Img />
        <Name />
      </div>
      <div className='m-4'>
        <Designation />
        <Skills />
        <DOJ/>
      </div>
    </div>
  )
}


const Img = () => {
  return (<div>
    <img src={avatar} alt='portfolio' className='w-36 h-36 rounded-full ' />
  </div>)
};

const Name = () => {
  return (
    <div className='flex items-center pt-4'>
      <h3 className='uppercase mx-2 font-medium'>kali krishna</h3>
      <CheckCircle2 color='white' fill='#14b8a6' size={22} />
    </div>
  );
}

const Designation = () => {
  return (
    <p className='m-2 text-gray-600 text-sm'>Junior Developer, Finland</p>
  );
}

const Skills = () => {
  const techStack = [
    'HTML',
    'JavaScript',
    'CSS',
    'TailwindCSS',
    'React',
    'Node.js',
    'Express',
    'Java',
    'Spring',
    'C#',
    '.NET',
    'Vue.js',
    'Angular',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'GraphQL',
    'AWS',
    'Git',
  ];

  const techStackElements = techStack.map((tech) => <div className='bg-teal-500 text-white p-1 rounded-md font-semibold'>{tech}</div>);

  return (
    <div className='m-2'>
      <h2 className='uppercase font-medium mb-4'>Skills</h2>
      <div className='flex flex-wrap text-xs gap-2'>
        {techStackElements}
      </div>
    </div>
  );
}

const DOJ = () => {
  return (
    <div className='m-2 text-gray-600 text-sm flex items-center space-x-2 mt-5'>
      <Clock size={14} />
      <p>Joined on April 3, 2023</p>
    </div>
  )
}




export default App;

