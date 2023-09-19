import React,{useState} from 'react'
import Button from '../../shared/Button';

function Animal() {
    const [animalName, setAnimalName] = useState('dog');
    const [animalUrl, setAnimalUrl] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThL-JlF3_d--7-Y2Q_-r3veHouCfIsKlKg-T_8w3uONap8P9mB84MCpZaXAoAGfo-5ubE&usqp=CAU');

    const changeAnimal = () => {
        let caturl = 'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg';
        let dogurl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThL-JlF3_d--7-Y2Q_-r3veHouCfIsKlKg-T_8w3uONap8P9mB84MCpZaXAoAGfo-5ubE&usqp=CAU';
        setAnimalName(animalName === 'dog' ? 'cat' : 'dog');
        setAnimalUrl(animalUrl === dogurl ? caturl : dogurl);
    }

  return (
      <div className='flex flex-col justify-center items-center m-5 p-3 bg-pink-100'>
          <p className='font-medium uppercase'>{animalName}</p>
          <img src={animalUrl} alt="animal" className='w-52 h-36'/>
          <Button customStyle={'bg-pink-300 font-medium m-5'} btnLabelText={'Change Animal'} fn={changeAnimal}/>
      </div>
  )
}

export default Animal