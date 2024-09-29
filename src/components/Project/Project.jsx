import React, { useRef } from 'react'
import { PROJECTS } from '../../utils/data'
import "./Project.css"
import ProjectCard from './ProjectCard/ProjectCard'
import Slider from 'react-slick'

const Project = () => {

  const sliderRef = useRef()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrow: false,
    responsive: [
      {
      breakpoint: 769,
      settings:{
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      },
    ],
  };

  const slideRight = ()=>{
    sliderRef.current.slickNext();
  };

  const slideLeft = ()=>{
    sliderRef.current.slickPrev();
  };

  return (
    <section className='project-container'>
        <h5>Projects</h5>
        <div className='project-content'>
          <div className='arrow-right' onClick={slideRight}>
            <span className='material-symbols-outlined'> chevron_right</span>
          </div>
          <div className='arrow-left' onClick={slideLeft}>
            <span className='material-symbols-outlined'> chevron_left</span>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {
                PROJECTS.map((item)=>(
                    <ProjectCard key={item.title} details={item}/>
                ))
            }
            </Slider>
        </div>
    </section>
  )
}

export default Project