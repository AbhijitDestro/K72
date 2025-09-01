import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';

const Agency = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const textContainerRef = useRef(null);
  const containerRef = useRef(null);
  const page3ImageRef = useRef(null);
  const page3Ref = useRef(null);

  // Disable browser scroll restoration
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  // Framer Motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress to background color
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.65, 0.85],
    ["rgb(255, 255, 255)", "rgb(0, 0, 0)"]
  );

  // Transform scroll progress to text color for page 2
  const textColor = useTransform(
    scrollYProgress,
    [0.65, 0.85],
    ["rgb(0, 0, 0)", "rgb(255, 255, 255)"]
  );

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ];

  // Team member data for page 3
  const teamMember = {
    firstName: 'HUGO',
    lastName: 'JOSEPH',
    position: 'CREATIVE DIRECTOR AJDOINT',
    image: 'https://k72.ca/uploads/teamMembers/HugoJoseph_640X960-640x960.jpg'
  };

  useGSAP(() => {
    if (!imageDivRef.current || !textContainerRef.current) return;

    // Page 1 image animation
    gsap.to(imageDivRef.current, {
      y: () => textContainerRef.current.offsetHeight - imageDivRef.current.offsetHeight,
      ease: 'none',
      scrollTrigger: {
        trigger: textContainerRef.current,
        start: 'top 50%',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          let imageIndex;
          if (self.progress < 1) {
            imageIndex = Math.floor(self.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          if (imageRef.current) {
            imageRef.current.src = imageArray[imageIndex];
          }
        },
      },
    });

    // Page 3 animations
    if (page3Ref.current) {
      // First name animation - right to left (single pass with delay)
      gsap.set('.page3-first-name', { x: '100%' });
      gsap.to('.page3-first-name', {
        x: '-100%',
        duration: 5,
        ease: 'none',
        repeat: -1,
        repeatDelay: 0,
      });

      // Last name + position animation - left to right (continuous)
      gsap.set('.page3-last-name-position', { x: '-100%' });
      gsap.to('.page3-last-name-position', {
        x: '100%',
        duration: 5,
        ease: 'none',
        repeat: -1,
        repeatDelay: 0,
      });
    }
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className='parent'
      style={{ backgroundColor }}
    >
      <section id='page1' className='py-1'>
        <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-70 top-60 lg:left-[30vw] left-[30vw]'>
          <img ref={imageRef} className='h-full object-cover w-full' src={imageArray[0]} alt="Team member portrait" />
        </div>

        <div ref={textContainerRef} className='relative font-[Bold]'>
          <div className='lg:mt-[55vh] mt-[30vh]'>
            <h1 className='text-[20vw] text-center leading-[16vw]'>SEVEN7Y <br /> TWELVE</h1>
          </div>
          <div className='lg:pl-[40%] lg:mt-4 mt-2 p-3'>
            <p className='lg:text-5xl text-3xl pr-[40px] leading-tight font-[Bold]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our curiosity fuels our creativity. We remain humble and say no to big egos, even yours. A brand is alive. She has values, a personality, a history. If we forget that, we can make good numbers in the short term, but we kill it in the long term. This is why we are committed to giving perspective, to building influential brands.</p>
          </div>
        </div>
      </section>

      <section id='page2' className="h-[70%] mt-20 ml-30 mb-30">
        <motion.div
          className='flex items-center justify-center gap-12 font-[Bold] h-full px-8'
          style={{ color: textColor }}
        >
          {/* First div - Expertise */}
          <div className='flex flex-col justify-between h-96 flex-1'>
            <p className='text-lg font-bold'>Expertise</p>
            <p className='text-lg leading-relaxed'>Our projects_ are born in humility<br />grow in curiosity and live thanks<br /> to creativity in all its forms.</p>
          </div>

          {/* Second div - Strategy section */}
          <div className='flex flex-col justify-between h-96 flex-1'>
            <div>
              <p className='text-lg font-bold -mb-1'>Strategy</p>
              <p className='text-lg font-bold -mb-1'>Advertisement</p>
              <p className='text-lg font-bold -mb-1'>Branding</p>
              <p className='text-lg font-bold -mb-1'>Design</p>
              <p className='text-lg font-bold'>Content</p>
            </div>
            <p className='text-lg leading-relaxed'>Our creation_ is bubbling in an environment where<br />  talent wants to explode. Where you feel free to be the <br /> best version of yourself.</p>
          </div>

          {/* Third div - Culture section */}
          <div className='flex flex-col justify-end h-96 flex-1'>
            <p className='text-lg leading-relaxed'>Our culture_ is openness to others.<br />  Point. The entire crew helps build an<br />  agency that we are proud of.</p>
          </div>
        </motion.div>
      </section>

      {/* Page 3 - Team member showcase */}
      <section id='page3' ref={page3Ref} className="h-screen relative overflow-hidden">
        {/* Team member images */}
        <div className="flex items-center justify-center h-full">
          <div className="relative w-[600px] h-[800px] rounded-2xl overflow-hidden z-2">
            {/* First team member image - always visible */}
            <img
              ref={page3ImageRef}
              src={teamMember.image}
              alt={`${teamMember.firstName} ${teamMember.lastName}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* First name banner - right to left */}
        <div className="absolute top-1/3 left-0 w-full overflow-hidden z-1">
          <div className="page3-first-name whitespace-nowrap">
            <span className="text-9xl font-[Bold] text-[#D3FD50] inline-block">
              {teamMember.firstName}
            </span>
          </div>
        </div>

        {/* Last name + position banner - left to right */}
        <div className="absolute bottom-1/3 left-0 w-full overflow-hidden z-10">
          <div className="page3-last-name-position whitespace-nowrap flex">
            <div className="inline-flex items-baseline mr-24">
              <span className="text-9xl font-[Bold] text-[#D3FD50] inline-block mr-[50px]">
                {teamMember.lastName}
              </span>
              <span className="text-5xl font-[Bold] text-gray-300">
                {teamMember.position}
              </span>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Agency