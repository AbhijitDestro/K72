import Video from './Video'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const HomeHeroText = () => {
    useGSAP(() => {
        // Initial setup - hide elements
        gsap.set('.hero-line', { y: 100, opacity: 0 })
        gsap.set('.hero-word', { y: 50, opacity: 0 })
        gsap.set('.video-container', { scale: 0, rotation: 180 })

        // Create timeline for entrance animation
        const tl = gsap.timeline({ delay: 0.5 })

        tl.to('.hero-line', {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        })
            .to('.video-container', {
                scale: 1,
                rotation: 0,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, "-=0.5")
            .to('.hero-word', {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.3")



        // Text glow effect on hover
        gsap.set('.hero-word', {
            textShadow: '0 0 0px rgba(211, 253, 80, 0)'
        })
    })

    return (
        <div className='font-[Thin] mt-72 lg:mt-0 pt-5 text-center'>
            <div className='hero-line lg:text-[9.7vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                <span className='hero-word inline-block hover:text-[#D3FD50] transition-colors duration-300 cursor-default'>The</span>
                <span className='hero-word inline-block hover:text-[#D3FD50] transition-colors duration-300 cursor-default ml-4'>spark</span>
                <span className='hero-word inline-block hover:text-[#D3FD50] transition-colors duration-300 cursor-default ml-4'>who</span>
            </div>
            <div className='hero-line lg:text-[9.7vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                <span className='hero-word inline-block hover:text-[#D3FD50] transition-colors duration-300 cursor-default'>who</span>
                <div className='video-container lg:h-[7vw] lg:w-[16vw] h-[10vw] w-[20vw] rounded-full overflow-hidden mx-4'>
                    <Video />
                </div>
                <span className='hero-word inline-block hover:text-[#D3FD50] transition-colors duration-300 cursor-default'>generates</span>
            </div>
            <div className='hero-line lg:text-[9.7vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                <span className='hero-word inline-block hover:text-[#D3FD50] transition-colors duration-300 cursor-default'>their</span>
                <span className='hero-word inline-block hover:text-[#D3FD50] transition-colors duration-300 cursor-default ml-4'>creativity</span>
            </div>
        </div>
    )
}

export default HomeHeroText