import React from 'react';
import { color, motion } from "motion/react"
import team1 from '../../assets/images/team-1.jpg'
import team2 from '../../assets/images/team-2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    {/* <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl"
                /> */}
                    <motion.img 
                    animate={{y:[100,150,100]}}
                    transition={{duration:5, repeat:Infinity}}
                    className='max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl
                    border-s-8 border-b-8 border-s-blue-500 border-b-blue-500
                    ' 
                    src={team1} alt="" />
                    <motion.img 
                    animate={{x:[100,150,100]}}
                    transition={{duration:10, delay:2, repeat:Infinity}}
                    className='max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl
                    border-s-8 border-b-8 border-s-blue-500 border-b-blue-500
                    ' 
                    src={team2} alt="" />
                </div>
                <div className='flex-1'>
                    {/* <motion.h1
                        animate={{ rotate: 180 }}
                        transition={{ duration: 2 }}
                        className="text-5xl font-bold">Latest Job Offer</motion.h1> */}

                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 4 } }}
                        // transition= {{duration: 2}}
                        className="text-5xl font-bold">Remote
                        <motion.span
                            animate={
                                {
                                    color: ['#ff5733', '#33ff33', '#8a33ff'],
                                    transition: { duration: 4, repeat: Infinity }
                                }}
                        >Job</motion.span> Offer</motion.h1>


                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;