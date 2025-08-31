import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const HomeBottom = () => {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup when component unmounts
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    // Initial setup
    gsap.set('.bottom-element', { y: 50, opacity: 0 })
    gsap.set('.nav-button', { scale: 0.8, opacity: 0 })
    gsap.set('.agency-text', { x: 50, opacity: 0 })
    
    // Entrance animations
    const tl = gsap.timeline({ delay: 2 })
    
    tl.to('.bottom-element', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    })
    .to('.nav-button', {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=0.4")
    .to('.agency-text', {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.3")
    

  })

  return (
    <>
      <div className='bottom-element bottom-5 left-5 fixed'>
        <div className="flex items-center gap-3 text-xl">
          <i className="fa-solid fa-globe"></i>
          <p>MONTREAL_{time.toLocaleTimeString('en-US', { timeZone: 'America/Montreal' })}</p>
        </div>
      </div>
      <div className='font-[Bold] flex items-center justify-center gap-6'>
        <Link className="nav-button text-[5.5vw] leading-[5vw] hover:text-[#D3FD50] hover:border-[#D3FD50] pt-3 px-2 border-2 border-white rounded-full" to='/projects'>
          PROJECTS
        </Link>
        <Link className="nav-button text-[5.5vw] hover:text-[#D3FD50] hover:border-[#D3FD50] leading-[5vw] pt-3 px-2 border-2 border-white rounded-full" to='/agency'>
          AGENCY
        </Link>
      </div>
      <div className='agency-text fixed bottom-20 right-5 max-w-xs'>
        <p className='text-white font-[Thin] text-sm leading-relaxed hover:text-[#D3FD50] transition-colors duration-500 cursor-default'>
          K72 is an agency that thinks about every action to nourish the brand. Tomorrow, in 5 months and in 5 years. We look for the friction that creates the spark to generate emotion. To ensure an honest relationship, we are without filter, we say what needs to be said, we do what needs to be done.
        </p>
      </div>
    </>
  )
}

export default HomeBottom;