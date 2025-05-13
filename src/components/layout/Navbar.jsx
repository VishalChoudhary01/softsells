import React,{useState} from 'react';
import ThemeToggle from '../ui/Toggle/Toggle';
import Logo from '../ui/Logo';
import {navMenu} from '../../constants/data'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import {motion,AnimatePresence} from 'motion/react';

const Navbar = ({menuToggle,Open}) => {
  
  

  return (
    <nav className='w-full md:h-[4rem] fixed backdrop-blur-2xl z-50 h-14 px-4 flex items-center   bg-linear-to-b dark:to-darkNavbar dark:from-[#1A4F50] from-[#fff] to-amber-100 to-100% justify-between   shadow-sm'>
      {/* Logo */}
      <Logo/>

      {/* Navigation Menu */}
      <div className='md:flex hidden items-center lg:gap-x-[5rem] md:gap-x-[2rem]'>
  {navMenu.map((item) => (
    <a
      key={item.name}
      href={item.path}
      className='lg:text-[1.1rem] md:text-[1rem] whitespace-nowrap font-medium text-textLight-primary dark:text-textDark-primary font-poppins transition-colors'
    >
      {item.name}
    </a>
  ))}
</div>
      {/* Theme Toggle */}
      <div className='hidden md:flex'>
      <ThemeToggle />
      </div>
      
      {/* Hamburger Menu Icon */}
      
      <div className="md:hidden flex items-center">
      <AnimatePresence mode="wait">
        {Open ? (
          <motion.div
            key="close"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <IoClose
              onClick={menuToggle}
              className="text-2xl text-textLight-primary dark:text-textDark-primary"
            />
          </motion.div>
        ) : (
          <motion.div
            key="hamburger"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <GiHamburgerMenu
              onClick={menuToggle}
              className="text-2xl text-textLight-primary dark:text-textDark-primary"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    </nav>
  );
};

export default Navbar;