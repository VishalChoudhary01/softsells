import React,{useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'

const MainLayout = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
        <div className='w-full h-screen flex flex-col'>
        <Navbar menuToggle={toggleMenu} Open={isOpen}/>
        <Sidebar menuToggle={toggleMenu} Open={isOpen}/>
        <div className='flex-1 pt-[4rem] dark:bg-bgDark  bg-bgLight'>
        <div className='w-full '>
           {children} 
        </div>
        </div>
         
        <Footer/>   
        </div>
  )
}

export default MainLayout