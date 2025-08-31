import React from 'react'

const Contact = () => {
    // Contact section component
    const ContactSection = () => (
        <div className='bg-black text-white min-h-screen'>
            {/* Main Content Section */}
            <div className='pt-32 px-8 lg:px-16'>
                <div className='flex lg:flex-row flex-col justify-between gap-6 lg:gap-12 lg:h-[60vh]'>
                    {/* Left P tag */}
                    <div className='lg:w-1/4 flex lg:items-end items-start'>
                        <p className='text-lg lg:text-xl font-[Thin] leading-relaxed'>
                            In a screen or desktop <br />
                            At your place. At our place.<br />
                            Everywhere.
                        </p>
                    </div>

                    {/* Center H1 tag - Very Big */}
                    <div className='lg:w-1/2 text-center flex items-center justify-center'>
                        <h1 className='text-5xl lg:text-[7vw] font-[Bold] leading-tight uppercase'>
                            FOR TALK ABOUT YOUR PROJECT
                        </h1>
                    </div>

                    {/* Right P tag */}
                    <div className='lg:w-1/4 text-right flex lg:items-end items-start lg:justify-end'>
                        <p className='text-lg lg:text-xl font-[Thin] leading-relaxed'>
                            525 BC. Viger O - Suite 400 <br />
                            Montreal, QC H2Z 1G6
                            <i className="fa-solid fa-arrow-right ml-2"></i>
                        </p>
                    </div>
                </div>
            </div>

            {/* Animated Banner */}
            <div className='mt-20 overflow-hidden bg-[#D3FD50] py-4 hover:bg-white'>
                <div className='animate-scroll-fast flex whitespace-nowrap'>
                    <span className='text-black text-7xl flex lg:text-9xl font-[Bold] uppercase mx-8 items-center'>
                        <img src="/images/heart.svg" className='lg:h-20 h-12 shrink-0 lg:w-20 w-12 object-contain mx-4' alt="heart" /> Bonjour@k72.ca
                    </span>
                    <span className='text-black text-7xl flex lg:text-9xl font-[Bold] uppercase mx-8 items-center'>
                        <img src="/images/heart.svg" className='lg:h-20 h-12 shrink-0 lg:w-20 w-12 object-contain mx-4' alt="heart" /> Bonjour@k72.ca
                    </span>
                    <span className='text-black text-7xl flex lg:text-9xl font-[Bold] uppercase mx-8 items-center'>
                        <img src="/images/heart.svg" className='lg:h-20 h-12 shrink-0 lg:w-20 w-12 object-contain mx-4' alt="heart" /> Bonjour@k72.ca
                    </span>
                </div>
            </div>

            {/* Follow Us Section */}
            <div className='mt-20 pb-20 text-center'>
                <p className='text-sm lg:text-base font-[Thin] mb-8 uppercase tracking-wider'>FOLLOW US</p>
                <div className='flex justify-center items-center gap-3'>
                    <a href="">
                        <button className="px-3 py-1 border-2 w-[100px] border-white rounded-full text-5xl font-[Bold] cursor-pointer transition-all duration-300 hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50]">IG</button>
                    </a>
                    <a href="">
                        <button className="px-3 py-1 border-2 w-[100px] border-white rounded-full text-5xl font-[Bold] cursor-pointer transition-all duration-300 hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50]">IN</button>
                    </a>
                    <a href="">
                        <button className="px-3 py-1 border-2 w-[100px] border-white rounded-full text-5xl font-[Bold] cursor-pointer transition-all duration-300 hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50]">GH</button>
                    </a>
                    <a href="">
                        <button className="px-3 py-1 w-[100px] border-2 border-white rounded-full text-5xl font-[Bold] cursor-pointer transition-all duration-300 hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50]">RE</button>
                    </a>
                </div>
            </div>
        </div>
    )

    return (
        <div className='bg-black'>
            {/* Infinite scrolling contact sections */}
            <ContactSection />
            <ContactSection />
            <ContactSection />
            <ContactSection />
            <ContactSection />
            <ContactSection />
            <ContactSection />
            <ContactSection />
        </div>
    )
}

export default Contact