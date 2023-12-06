import React,{useState} from 'react'
import product1 from '../../assets/image-product-1.jpg'
import product2 from '../../assets/image-product-2.jpg'
import product3 from '../../assets/image-product-3.jpg'
import product4 from '../../assets/image-product-4.jpg'
import close from '../../assets/icon-close.svg'
function Main() {

    const [currImage, setCurrImage] = useState(product1);

    const [zoomMode, setZoomMode] = useState(false);

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center '>
        <div className='w-[500px] h-[500px]  flex flex-col justify-center items-center space-y-5'>
            <div className='w-[60%] h-[60%] '>
                <img className='w-full h-full rounded-xl cursor-pointer' src={currImage} alt="primary" onClick={()=>setZoomMode(true)}/>
            </div>
            <div className='w-[60%] flex  justify-around gap-x-2'>
                
                  <div className={`rounded-lg ${product1===currImage?'border-2 border-orange-500':''}`}>
                      <img className={`w-16 h-16 rounded-md cursor-pointer ${product1 === currImage ? 'opacity-30 ' : 'hover:opacity-50'}`} src={product1} alt="secondary" onClick={() => setCurrImage(product1)} />
                  </div>
                  
                  <div className={`rounded-lg ${product2===currImage?'border-2 border-orange-500':''}`}>
                  <img className={`w-16 h-16 rounded-md cursor-pointer ${product2 === currImage ? 'opacity-30 ' : 'hover:opacity-50'}`} src={product2} alt="secondary" onClick={() => setCurrImage(product2)} />
                  </div>
                  
                  <div className={`rounded-lg ${product3===currImage?'border-2 border-orange-500':''}`}>
                  <img className={`w-16 h-16 rounded-md cursor-pointer ${product3===currImage?'opacity-30 ':'hover:opacity-50'}`} src={product3} alt="secondary" onClick={() => setCurrImage(product3)} />
                  </div>
                      
                  <div className={`rounded-lg ${product4===currImage?'border-2 border-orange-500':''}`}>
                  <img className={`w-16 h-16 rounded-md cursor-pointer ${product4===currImage?'opacity-30 ':'hover:opacity-50'}`} src={product4} alt="secondary" onClick={()=>setCurrImage(product4)} />
                  </div>

            </div>
        </div>
          {zoomMode ? (
        <div className='w-full h-screen bg-black/70 absolute flex flex-col justify-center items-center'>
                <div className='w-[600px] h-[600px]  flex flex-col justify-center items-center space-y-5'>
                    <div className='self-center w-[60%] flex justify-end'>
                          <img src={close} alt="close" className={`hover:bg-orange-400 p-2 rounded-full cursor-pointer`} onClick={()=>setZoomMode(false)} />
                    </div>
            <div className='w-[60%] h-[60%] '>
                <img className='w-full h-full rounded-xl' src={currImage} alt="primary"/>
            </div>
            <div className='w-[60%] flex  justify-around gap-x-2'>
                
                  <div className={`rounded-lg ${product1===currImage?'border-2 border-orange-500':''}`}>
                      <img className={`w-16 h-16 rounded-md cursor-pointer ${product1 === currImage ? 'opacity-30 ' : 'hover:opacity-50'}`} src={product1} alt="secondary" onClick={() => setCurrImage(product1)} />
                  </div>
                  
                  <div className={`rounded-lg ${product2===currImage?'border-2 border-orange-500':''}`}>
                  <img className={`w-16 h-16 rounded-md cursor-pointer ${product2 === currImage ? 'opacity-30 ' : 'hover:opacity-50'}`} src={product2} alt="secondary" onClick={() => setCurrImage(product2)} />
                  </div>
                  
                  <div className={`rounded-lg ${product3===currImage?'border-2 border-orange-500':''}`}>
                  <img className={`w-16 h-16 rounded-md cursor-pointer ${product3===currImage?'opacity-30 ':'hover:opacity-50'}`} src={product3} alt="secondary" onClick={() => setCurrImage(product3)} />
                  </div>
                      
                  <div className={`rounded-lg ${product4===currImage?'border-2 border-orange-500':''}`}>
                  <img className={`w-16 h-16 rounded-md cursor-pointer ${product4===currImage?'opacity-30 ':'hover:opacity-50'}`} src={product4} alt="secondary" onClick={()=>setCurrImage(product4)} />
                  </div>

            </div>
        </div>
    </div>
        ):''}
    </div>
  )
}

export default Main