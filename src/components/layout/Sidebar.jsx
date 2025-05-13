import React from 'react';
import {navMenu} from '../../constants/data';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from '../ui/Toggle/Toggle';
const Sidebar = ({ Open, menuToggle }) => {
  return (
    <AnimatePresence>
      {Open && (
        <>
          {/* Blurred Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[3.5rem] left-0 right-0 bottom-0 dark:bg-bgDark-tertiary bg-bgLight-tertiary bg-opacity-50 backdrop-blur-3xl z-40 "
            onClick={menuToggle} 
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-[3.42rem] right-0 w-[55%] max-w-sm h-screen  z-50 shadow-lg"
          >
            <div className="h-full  flex  bg-linear-90 to-buttonLight-disabled-bg pt-8 from-bgLight-secondary dark:to-bgDark-secondary dark:from-bgDark-tertiary  gap-x-7 rounded-l-lg ">
              <div className='flex flex-col   space-y-4 pl-4 '>
              {navMenu.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-md font-medium text-textLight-primary dark:text-textDark-primary font-poppins hover:underline transition-colors"
                >
                  {item.name}
                </a>
              ))}
              </div>
              <div className='absolute top-1 right-2'>
              <ThemeToggle  />
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
