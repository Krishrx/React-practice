import React,{useState} from 'react'
import { Clipboard,Check } from 'lucide-react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

function ColorBox({ color }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
    };
    
  return (
    <div className='w-32 h-32 rounded-md flex flex-col justify-center items-center space-y-8 relative' style={{backgroundColor:color}}>
          <div className='text-white font-bold'>
              {color}
          </div>
          <CopyToClipboard text={color} onCopy={handleCopy}>
          <div className='clipboard cursor-pointer'>
              <Clipboard />
          </div>
          </CopyToClipboard>
          <div className='tooltip absolute top-[10%] left-[35%] bg-black text-white p-1 rounded-md opacity-0 transition-opacity  duration-300'>
                Copy
          </div>
           {copied && (<div className='absolute top-[10%] left-[20%] bg-green-400 text-white p-1 rounded-md'>
               <div className='flex justify-center items-center'>Copied <span className='inline-block pl-1'><Check size={20}/></span></div>
          </div>)}
    </div>
  )
}

export default ColorBox