import React from 'react'
import { FaMoneyCheckDollar, FaCircle, FaSquare, FaStar } from 'react-icons/fa6'
import { motion } from 'motion/react'
import Button from './../ui/Button/Button'

const floatingVariants = {
  animate: {
    y: [0, -30, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const headingVariants = {
  hidden: { 
    y: 100,
    opacity: 0 
  },
  visible: { 
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const shapes = [
  { icon: <FaCircle className='text-teal-500 dark:text-teal-300' />, top: '10%', left: '5%' },
  { icon: <FaSquare className='text-amber-400 dark:text-amber-300' />, top: '60%', left: '20%' },
  { icon: <FaStar className='text-cyan-500 dark:text-cyan-400' />, top: '30%', left: '80%' },
  { icon: <FaCircle className='text-red-500 dark:text-red-400' />, top: '70%', left: '65%' },
  { icon: <FaSquare className='dark:text-white' />, top: '20%', left: '40%' },
]

const Hero = () => {
  return (
    <section to="home" className='relative text-center flex flex-col items-center lg:gap-y-6 md:gap-y-5 gap-y-8  
        lg:pt-[6rem] md:pt-[4rem] pt-[4rem] md:px-0 px-4 pb-[2rem] transition-all duration-300 overflow-hidden'>

      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className='floating-icon'
          style={{ top: shape.top, left: shape.left }}
          variants={floatingVariants}
          animate="animate"
        >
          {shape.icon}
        </motion.div>
      ))}

      <motion.h1 
      variants={headingVariants}
      initial="hidden"
      animate="visible"
      className='lg:text-[3rem] md:text-[2.5rem] text-3xl text-textLight-primary dark:text-textDark-primary 
        hover:scale-105 transition-all cursor-zoom-in text-shadow-shadowLight dark:text-shadow-teal-500/20 text-shadow-lg md:tracking-wider 
        font-poppins font-semibold'>
        Turn Unused Software Licenses Into Cash
      </motion.h1>

      <motion.h2
      initial={{opacity:0,x:-100}}
      animate={{opacity:1,x:0}}
      transition={{duration:0.6,delay:0.8}}
       className='lg:text-[2rem] md:text-[1.5rem] lg:max-w-5xl md:max-w-2xl md:mx-0 mx-2.5 text-pretty 
        font-medium font-poppins dark:text-textDark-secondary text-textLight-secondary'>
        LicenseFlip helps businesses sell surplus software licenses quickly, legally, and securely
      </motion.h2>

      <motion.div
      initial={{opacity:0,scale:0}}
      animate={{opacity:1,scale:1}}
      transition={{duration:0.8,ease:"easeIn",delay:0.4}}
       className='flex gap-4 font-semibold'>
        <Button buttonText={"Get a Quote"} buttonStyles={" border-borderDark text-borderDark border-2  lg:text-xl md:text-md lg:px-6 lg:py-3 md:px-4 md:py-2.5 px-3 py-2 rounded-lg cursor-pointer  dark:text-buttonDarkText dark:border-buttonDarkText"} />
        <Button buttonText={"Sell My Licenses "} buttonStyles={"lg:text-xl md:text-md lg:px-6 lg:py-3 md:px-4 md:py-2.5 px-3 py-2 rounded-lg cursor-pointer bg-buttonLight text-buttonLightText dark:text-buttonDarkText dark:bg-buttonDark"}/>
      </motion.div>
    </section>
  )
}

export default Hero
