import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef, useState, useEffect } from 'react'
import { NavbarContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'


const FullScreenNav = () => {
    const [time, setTime] = useState(new Date());

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup when component unmounts
        return () => clearInterval(timer);
    }, []);

    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)

    const [navOpen, setNavOpen] = useContext(NavbarContext)

    function gsapAnimation() {
        const tl = gsap.timeline()
        
        // Initial setup for new animations
        gsap.set('.nav-letter', { y: 100, opacity: 0, rotationX: 90 })
        gsap.set('.nav-word', { scale: 0.8, opacity: 0 })
        gsap.set('.social-btn', { x: 50, opacity: 0, rotation: 180 })
        
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.05,
            height: '100%',
            duration: 0.4,
            stagger: {
                amount: -0.15
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            duration: 0.3,
            stagger: {
                amount: 0.15
            }
        })
        .to('.nav-letter', {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.4,
            stagger: 0.02,
            ease: "back.out(1.7)"
        }, "-=0.2")
        .to('.nav-word', {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.out"
        }, "-=0.3")
        tl.to('.navlink', {
            opacity: 1,
            duration: 0.2
        })
        tl.to('.bottomsection', {
            opacity: 1,
            y: 0,
            duration: 0.3,
            delay: 0.1
        })
        .to('.social-btn', {
            x: 0,
            opacity: 1,
            rotation: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(1.7)"
        }, "-=0.2")
        

    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.bottomsection', {
            opacity: 0,
            y: 20,
            duration: 0.2
        })
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            duration: 0.2,
            stagger: {
                amount: 0.05
            }
        })
        tl.to('.stairing', {
            height: 0,
            duration: 0.3,
            stagger: {
                amount: 0.05
            }
        })
        tl.to('.navlink', {
            opacity: 0,
            duration: 0.15
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }

    useGSAP(function () {
        if (navOpen) {
            gsapAnimation()
        } else {
            gsapAnimationReverse()
        }
    }, [navOpen])

    return (
        <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute'>
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative'>
                <div className="navlink flex w-full justify-between lg:p-5 p-2 items-center">
                    <div className=''>
                        <Link to="/" onClick={() => setNavOpen(false)} className='lg:w-28 w-16 block cursor-pointer'>
                            <svg className=' w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </Link>
                    </div>
                    <div onClick={() => {
                        setNavOpen(false)
                    }} className='cursor-pointer group p-2'>
                        <svg
                            className='lg:w-12 lg:h-12 w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-90'
                            fill='#D3FD50'
                            viewBox="0 0 384 512"
                        >
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                    </div>
                </div>
                <div className='py-4 navlinks'>
                    <Link to="/projects" onClick={() => setNavOpen(false)} className='link origin-top relative border-t-1 border-white overflow-hidden cursor-pointer block group'>
                        <h1 className='font-[Bold] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:py-3 py-1.5 uppercase group-hover:text-[#D3FD50] transition-colors duration-300'>
                            {'PROJECTS'.split('').map((letter, index) => (
                                <span key={index} className='nav-letter inline-block hover:scale-110 transition-transform duration-200'>{letter}</span>
                            ))}
                        </h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50] w-full h-full'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[Bold] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:py-3 py-1.5 uppercase mx-4'>To See Everything</h2>
                                <img className='lg:h-28 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover mx-4' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[Bold] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:py-3 py-1.5 uppercase mx-4'>To see everything</h2>
                                <img className='lg:h-28 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover mx-4' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[Bold] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:py-3 py-1.5 uppercase mx-4'>To see everything</h2>
                                <img className='lg:h-28 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover mx-4' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[Bold] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:py-3 py-1.5 uppercase mx-4'>To see everything</h2>
                                <img className='lg:h-28 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover mx-4' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </Link>
                    <Link to="/agency" onClick={() => setNavOpen(false)} className='link origin-top relative border-t-1 border-white overflow-hidden cursor-pointer block group'>
                        <h1 className='font-[Bold] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:py-3 py-1.5 uppercase group-hover:text-[#D3FD50] transition-colors duration-300'>
                            {'AGENCY'.split('').map((letter, index) => (
                                <span key={index} className='nav-letter inline-block hover:scale-110 transition-transform duration-200'>{letter}</span>
                            ))}
                        </h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50] w-full h-full'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[Bold] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:py-3 py-1.5 uppercase mx-4'>To know everything</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover mx-4' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[Bold] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:py-3 py-1.5 uppercase mx-4'>To know everything</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover mx-4' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[Bold] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:py-3 py-1.5 uppercase mx-4'>To know everything</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover mx-4' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[Bold] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:py-3 py-1.5 uppercase mx-4'>To know Everything</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover mx-4' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </Link>
                    <Link to="/contact" onClick={() => setNavOpen(false)} className='link origin-top relative border-t-1 border-white overflow-hidden cursor-pointer block group'>
                        <h1 className='font-[Bold] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:py-3 py-1.5 uppercase group-hover:text-[#D3FD50] transition-colors duration-300'>
                            {'CONTACT'.split('').map((letter, index) => (
                                <span key={index} className='nav-letter inline-block hover:scale-110 transition-transform duration-200'>{letter}</span>
                            ))}
                        </h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50] w-full h-full'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[Bold] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:py-3 py-1.5 uppercase mx-4'>To send a fax</h2>
                                <img src="/images/heart.svg" className='lg:h-36 h-14 shrink-0 lg:w-36 w-14 object-contain mx-4' alt="heart" />
                                <h2 className='whitespace-nowrap font-[Bold] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:py-3 py-1.5 uppercase mx-4'>To send a fax</h2>
                                <img src="/images/heart.svg" className='lg:h-36 h-14 shrink-0 lg:w-36 w-14 object-contain mx-4' alt="heart" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[Bold] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:py-3 py-1.5 uppercase mx-4'>To send a fax</h2>
                                <img src="/images/heart.svg" className='lg:h-36 h-14 shrink-0 lg:w-36 w-14 object-contain mx-4' alt="heart" />
                                <h2 className='whitespace-nowrap font-[Bold] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:py-3 py-1.5 uppercase mx-4'>To send a fax</h2>
                                <img src="/images/heart.svg" className='lg:h-36 h-14 shrink-0 lg:w-36 w-14 object-contain mx-4' alt="heart" />
                            </div>
                        </div>
                    </Link>
                    <Link to="/blog" onClick={() => setNavOpen(false)} className='link origin-top relative border-y-1 border-white overflow-hidden cursor-pointer block group'>
                        <h1 className='font-[Bold] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:py-2 py-1 uppercase group-hover:text-[#D3FD50] transition-colors duration-300'>
                            {'BLOG'.split('').map((letter, index) => (
                                <span key={index} className='nav-letter inline-block hover:scale-110 transition-transform duration-200'>{letter}</span>
                            ))}
                        </h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50] w-full h-full'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[Bold] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:py-2 py-1 uppercase mx-4'>Read the articles</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover mx-4' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-1280x960.png" alt="" />
                                <h2 className='whitespace-nowrap font-[Bold] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:py-2 py-1 uppercase mx-4'>Read the articles</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover mx-4' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[Bold] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:py-2 py-1 uppercase mx-4'>Read the articles</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover mx-4' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-1280x960.png" alt="" />
                                <h2 className='whitespace-nowrap font-[Bold] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:py-2 py-1 uppercase mx-4'>Read the articles</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover mx-4' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="bottomsection opacity-0 fixed bottom-0 left-0 w-full flex items-center justify-between px-6 py-3 text-white font-[Bold]">
                    {/* Left Side - Time */}
                    <div className="flex items-center gap-3 text-xl">
                        <i className="fa-solid fa-globe"></i>
                        <p>MONTREAL_{time.toLocaleTimeString('en-US', { timeZone: 'America/Montreal' })}</p>
                    </div>

                    {/* Right Side - Social Links */}
                    <div className="flex gap-2">
                        <a href="">
                            <button className="social-btn w-[70px] border-2 rounded-full text-[28px] cursor-pointer hover:text-[#D3FD50] hover:border-[#D3FD50] hover:scale-110 hover:rotate-12 transition-all duration-300">
                                <span className="nav-word inline-block">IG</span>
                            </button>
                        </a>
                        <a href="">
                            <button className="social-btn w-[70px] border-2 rounded-full text-[28px] cursor-pointer hover:text-[#D3FD50] hover:border-[#D3FD50] hover:scale-110 hover:rotate-12 transition-all duration-300">
                                <span className="nav-word inline-block">IN</span>
                            </button>
                        </a>
                        <a href="">
                            <button className="social-btn w-[70px] border-2 rounded-full text-[28px] cursor-pointer hover:text-[#D3FD50] hover:border-[#D3FD50] hover:scale-110 hover:rotate-12 transition-all duration-300">
                                <span className="nav-word inline-block">GH</span>
                            </button>
                        </a>
                        <a href="">
                            <button className="social-btn w-[70px] border-2 rounded-full text-[28px] cursor-pointer hover:text-[#D3FD50] hover:border-[#D3FD50] hover:scale-110 hover:rotate-12 transition-all duration-300">
                                <span className="nav-word inline-block">RE</span>
                            </button>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default FullScreenNav