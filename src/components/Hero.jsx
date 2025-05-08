import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router'
import video from '../assets/banner-video.mp4'
import bannerLeft from '../assets/banner-left.avif'
import bannerRight from '../assets/banner-right.png'

const Hero = () => {
  return (
    <div className='pt-24 bg-black text-white md:pt-32'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative'>
            {/* SubTitle */}
            <div className='mb-6'>
                <span className='text-[#999999] uppercase tracking-[0.2em] text-sm font-medium'>MORE THAN A WEBSITE BUILDER</span>
            </div>
            {/* Main HEading */}
            <h1 className='text-4xl sm:text-5xl lg:text-8xl font-bold mb-8 md:mb-16 leading-[1.1] tracking-[-0.02em]'>Your Site should do<br className='md:block hidden'></br> more than look good</h1>

            {/* paragraph and comments */}

            <div className='flex md:flex-row items-center flex-col justify-between gap-8'>
                <p className='text-[#99999] md:w-4/5  md:text-xl mb-8 md:mb-0 leading-relaxed' >As the first-ever website experience platform, CodeTutor lets marketers, designers and developers come together to buil, manage and optimize web experiences that get results</p>
                <div  className='flex sm:flex-row flow-wrap gap-8 shrink-0'>
                    <Link to="/startbuilding" className='bg-blue-600 hover:bg-blue-700 px-8 text-white py-4 rounded text-lg font-medium transition-colors duration-200'  >Start Building</Link>
                    <Link to="/startbuilding" className=' hover:text-white/40 px-8 text-white group flex items-center py-4 rounded text-lg font-medium transition-colors duration-200'  >Contact Sales <HiArrowRight className='ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200' /> </Link>
                </div>
            </div>

            {/* video */}
            <div className='w-full h-full mt-16 relative'>
                <video src={video} autoPlay muted loop className='w-full h-full object-cover'></video>
                <div className='absolute top-1/2 md:-left-0 z-20 lg:block hidden xl:-left-20'>
                    <img src={bannerLeft} alt="" className='lg:h-32 md:h-24 h-20 w-fit object-cover ' />
                </div>
                <div className='absolute bottom-1/5 lg:-right-20 md:-right-0 z-20 lg:block hidden '>
                    <img src={bannerRight} alt="" className='lg:h-44 md:h-32 h-28 w-full object-cover ' />
                </div>
            </div>
            {/* overlay */}
            <div className='absolute bottom-0 left-0 right-0 h-1/2 z-10 bg-gradient-to-t from-black to-transparent hidden md:block'>

            </div>

        </div>
    </div>
  )
}

export default Hero
