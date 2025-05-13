import { useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'motion/react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../features/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  const haloVariants = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    hover: {
      opacity: [0, 0.3, 0],
      scale: [1, 1.4, 1.6],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <motion.button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-full focus:outline-none cursor-pointer relative"
      aria-label="Toggle dark mode"
      style={{
        background: `var(--color-${mode === 'dark' ? 'headerDark' : 'headerLight'})`
      }}
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      initial="initial"
    >
      {/* Icon */}
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ scale: 0, rotate: 45 }}
          animate={{ 
            scale: 1, 
            rotate: 0,
            color: mode === 'dark' ? 'var(--color-DarkToggleIcon)' : 'var(--color-lightToggleIcon)'
          }}
          exit={{ scale: 0, rotate: -45 }}
          transition={{ duration: 0.2, ease: 'backInOut' }}
          className="relative z-10"
        >
          {mode === 'dark' ? (
            <FaMoon className="text-lg moon-float" />
          ) : (
            <FaSun className="text-lg sun-spin" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Halo shown only on hover */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 pointer-events-none"
        variants={haloVariants}
        style={{
          borderColor: mode === 'dark'
            ? 'var(--color-primaryDark)'
            : 'var(--color-primaryLight)'
        }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
