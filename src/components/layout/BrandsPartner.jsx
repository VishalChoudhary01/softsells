import React from 'react'
import {brands} from '../../constants/data'
import InfiniteBrandScroll from '../ui/InfiniteBrandScroll'
import {motion} from 'motion/react'
const BrandsPartner = () => {
    
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-30">
        <motion.h3
      initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
         className='w-full text-textLight-primary dark:text-textDark-primary after:bg-textLight-disabled after:dark:bg-textDark-disabled text-center lg:text-4xl md:text-3xl text-2xl font-roboto-slab font-medium relative after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1  after:h-1  after:animate-underlinePluse'>Brands </motion.h3>
      
      <div className="rounded-xl  p-6 ">
        <InfiniteBrandScroll brands={brands} />
      </div>
    </section>
  )
}

export default BrandsPartner