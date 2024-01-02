import React,{useState} from 'react'
import {motion} from 'framer-motion'
function Main() {

  const navVariant = {
    open: {
      opacity: 1,
      x: 0
    },
    closed: {
      opacity: 0,
      x: "-100%"
    },
  }

  const [isOpen, setIsOpen] = useState(false);
  const [veg, setVeg] = useState('tomato');

  const tomato = "https://www.svgrepo.com/download/7878/tomato.svg";
  const lettuce = "https://www.svgrepo.com/show/53717/lettuce.svg";
  const cheese = "https://www.svgrepo.com/show/395996/cheese-wedge.svg";

  return (
    <div className='w-full h-full'>
          <motion.div className='w-[200px] h-[200px] bg-pink-400 rounded-full'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}>
          </motion.div>
          <motion.div className='w-[200px] h-[200px] bg-teal-400 rounded-full'
            animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}>
          </motion.div>
          
          <div onClick={()=>setIsOpen(!isOpen)} className='bg-purple-600 w-fit px-4 py-2 my-4 rounded-full text-white cursor-pointer'>+</div>
          
          <motion.div animate={isOpen?"open":"closed"} variants={navVariant} transition={{duration:0.35}}>
            
            <ul className='space-y-4'>
              <NavItems item={'Home'} />
              <NavItems item={'About'} />
              <NavItems item={'Services'} />
              <NavItems item={'Contact'} />
            </ul>
          </motion.div>
          
          <div className='bg-teal-50 w-[450px] h-[450px] mx-auto my-4 rounded-2xl font-medium'>
            <div className='py-4'>
              <ul className='flex justify-around items-center'>
                <li onClick={()=>setVeg("tomato")} className='flex items-center gap-x-1 cursor-pointer'><img src={tomato} alt="" className='w-5 h-5'/><span>Tomato</span></li>
                <li onClick={()=>setVeg("lettuce")} className='flex items-center gap-x-1 cursor-pointer'><img src={lettuce} alt="" className='w-5 h-5' /><span>Lettuce</span></li>
                <li onClick={()=>setVeg("cheese")} className='flex items-center gap-x-1 cursor-pointer'><img src={cheese} alt="" className='w-5 h-5'/><span>Cheese</span></li>
              </ul>
            </div>
            <div className='p-5'>
              {veg==='tomato'?(<img src={tomato} alt="" className='w-52 h-52 object-cover mx-auto my-16' />):veg==='lettuce'?(<img src={lettuce} alt="" className='w-52 h-52 object-cover mx-auto my-16' />):(<img src={cheese} alt="" className='w-52 h-52 object-cover mx-auto my-16' />)}                          
            </div>
          </div>
    </div>
  )
}

function NavItems({item}) {
  return (
    <motion.li whileHover={{y:"-20%"}} className='cursor-pointer'>{item}</motion.li>
  )
}

export default Main