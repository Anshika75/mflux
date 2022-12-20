import React from 'react'
import "../styles/main.css"
import "animate.css/animate.min.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import elipse from '../assets/elipse.png'
export default function Main() {
    return (
        <div className="min-h-screen bg-fixed w-full grid place-items-center bgg py-28">
            <div className="absolute top-24 right-0 z-40 h-20 w-20">
                <img src={elipse} alt="" />
            </div>
            <div className="flex-flex-col-justify-center items-center z-20 w-[60%] md:w-[65%]">
                <h1 className="text-2xl lg:text-3xl tracking-wide font-bold leading-8 lg:leading-10 text-[#F2F2F2] capitalize">
                    <span className='text-[#f8ba22] underline underline-offset-8'>Lorem Ipsum</span> Dolor Sit amet consectetur adipisicing elit. Officiis voluptatum, unde, commodi nisi saepe odit ea, deleniti qui accusantium natus doloremque aspernatur autem! Consequuntur.</h1>
            </div>
            {/* <AnimationOnScroll animateIn="animate__fadeIn" className='w-full grid place-items-center z-30'> */}
                <div className="h-[300px] mt-12 w-[85%] lg:w-[500px] lg:translate-x-[50%] z-30">
                    <img className='w-full h-full' src="https://www.datocms-assets.com/50442/1630680703-video.gif?auto=format&w=745" alt="" />
                </div>
            {/* </AnimationOnScroll> */}
            
        </div>
    )
}
