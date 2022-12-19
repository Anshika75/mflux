import React from 'react'
import "../styles/main.css"
import "animate.css/animate.min.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
export default function Main() {
    return (
        <div className="min-h-screen w-full grid place-items-center bgg py-28">
            <div className="flex-flex-col-justify-center items-center z-20 w-[90%] md:w-[85%]">
                <h1 className="text-[44px] md:text-[80px] tracking-wide font-bold leading-[44px] md:leading-[85px] text-[#F2F2F2]">
                    <span className='text-[#f8ba22] underline underline-offset-8'>AT ENGINE SHOP</span> NEW PLATFORMS AND NEW IDEAS GIVE US A CHANCE TO WRITE THE FUTURE. THAT VENTURE BEGINS WITH CURIOSITY, COURAGE AND COLLABORATION. YOUR BRAND’S FUTURE FUELS US.</h1>
            </div>
            <AnimationOnScroll animateIn="animate__fadeIn">
            <div className="h-[300px] w-[300px] md:w-[500px] md:translate-x-[50%]">
                <iframe src="https://player.vimeo.com/video/609956896?h=84d0c88e42&amp;title=0&amp;byline=0&amp;portrait=0&amp;playsinline=0&amp;muted=1&amp;autoplay=1&amp;autopause=0&amp;controls=0&amp;loop=1&amp;app_id=122963" width="426" height="240" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" className='w-full h-full'></iframe>
            </div>
            </AnimationOnScroll>
        </div>
    )
}
