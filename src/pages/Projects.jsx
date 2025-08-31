import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Projects = () => {

  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup when component unmounts
    return () => clearInterval(timer);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div>
      <div id="top" className='lg:p-4 p-2'>
        <div className=' pt-[45vh]'>
          <h2 className='font-[Bold] lg:text-[9.5vw] text-7xl uppercase'>Projects</h2>
        </div>
        <div className='-lg:mt-20 lol'>
          {projects.map(function (elem, idx) {
            return <div key={idx} className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          })}
        </div>
      </div>

      {/* Footer Section */}
      <footer className='h-[60vh] bg-black w-full text-white'>
        <div className='w-full px-8 pt-8 flex items-start justify-between'>
          <div className="flex gap-4">
            <a href="">
              <button className="px-4 border-2 border-white rounded-full text-8xl font-[Bold] cursor-pointer transition-all duration-300 hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50]">IG</button>
            </a>
            <a href="">
              <button className="px-4 border-2 border-white rounded-full text-8xl font-[Bold] cursor-pointer transition-all duration-300 hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50]">IN</button>
            </a>
            <a href="">
              <button className="px-4 border-2 border-white rounded-full text-8xl font-[Bold] cursor-pointer transition-all duration-300 hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50]">GH</button>
            </a>
            <a href="">
              <button className="px-4 border-2 border-white rounded-full text-8xl font-[Bold] cursor-pointer transition-all duration-300 hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50]">RE</button>
            </a>
          </div>
          <div>
            <Link to="/contact">
              <button className="group px-4 border-2 border-white rounded-full text-8xl font-[Bold] cursor-pointer transition-all duration-300 hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50] flex items-center gap-3">
                CONTACT
                <img src="/images/heart.svg" className='h-18 w-18 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300' alt="heart" />
              </button>
            </Link>
          </div>
        </div>
        <div className='bottom-0 fixed flex items-center justify-between w-full px-3 pb-3'>
          <div className="flex items-center gap-3 text-xl">
            <i className="fa-solid fa-globe"></i>
            <p>MONTREAL_{time.toLocaleTimeString('en-US', { timeZone: 'America/Montreal' })}</p>
          </div>
          <div className='flex items-center justify-center gap-8 font-[Bold]'>
            <p className='hover:text-[#D3FD50] uppercase'>Privacy policy</p>
            <p className='hover:text-[#D3FD50] uppercase'>Privacy Notice</p>
            <p className='hover:text-[#D3FD50] uppercase'>Ethical Report</p>
            <p className='hover:text-[#D3FD50] uppercase'>Consent Options</p>
          </div>
          <div>
            <button onClick={scrollToTop} className='text-xl cursor-pointer hover:text-[#D3FD50] transition-colors duration-300'><h2>BACK TO TOP</h2></button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Projects