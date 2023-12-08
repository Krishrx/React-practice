import React,{useState} from 'react'
import {data} from '../../datas/reviewers'
import Card from './Card'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Cards() {

  const cardComponent = data.map((d) => {
    return <Card load={d} key={d.name} />;
  });

  return (
    <div className='w-full h-full flex flex-col justify-center items-center space-y-5'>
      <p className='text-2xl font-mono font-semibold text-violet-900'>What they've said</p>
      
        {/* <div className='bg-purple-100 w-full p-10 py-14 flex flex-col md:flex-wrap md:flex-row md:space-y-0 gap-4 space-y-8 justify-center items-center'>
            {cardComponent}
        </div> */}
      <div className='bg-purple-100 w-full h-full py-10 flex justify-center items-center'>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className="py-10"
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={true}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        rewind
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
  >
  {cardComponent}
        </Carousel>
    </div>
  </div> 
  )
}

export default Cards