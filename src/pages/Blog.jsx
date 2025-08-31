import { useGSAP } from '@gsap/react'
import BlogCard from '../components/blog/BlogCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {

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

  const blogs = [{
    image1: 'https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-1280x960.png',
    image2: 'https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif',
    title1: 'Predictive advertising: AI is revolutionizing targeting',
    title2: 'Advice & customer relations: a duo that cannot be briefed, that is built'
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
      <div id="top" className='lg:p-4 p-2 bg-white h-[1100px]'>
        <div className=' pt-[45vh]'>
          <h2 className='font-[Bold] lg:text-[9.5vw] text-7xl uppercase text-black'>Blog</h2>
        </div>
        <div>
          {blogs.map(function (elem, idx) {
            return <div key={idx} className='hero w-full flex lg:flex-row flex-col lg:gap-4 gap-2'>
              <div className='lg:w-1/2 h-[500px] flex flex-col gap-3'>
                <BlogCard image1={elem.image1} />
                <h3 className='font-[Bold] text-2xl uppercase text-black'>{elem.title1}</h3>
              </div>
              <div className='lg:w-1/2 flex h-[500px] flex-col gap-3'>
                <BlogCard image2={elem.image2} />
                <h3 className='font-[Bold] text-2xl uppercase text-black'>{elem.title2}</h3>
              </div>
            </div>
          })}
        </div>
      </div>

      {/* Footer Section */}
      <footer className='h-[70vh] bg-black w-full text-white'>
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

export default Blog