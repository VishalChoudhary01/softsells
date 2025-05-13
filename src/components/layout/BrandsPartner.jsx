import React from 'react'
import {brands} from '../../constants/data'
import InfiniteBrandScroll from '../ui/InfiniteBrandScroll'
const BrandsPartner = () => {
    
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-30">
        <h3 className='w-full text-textLight-primary dark:text-textDark-primary after:bg-textLight-disabled after:dark:bg-textDark-disabled text-center lg:text-4xl md:text-3xl text-2xl font-roboto-slab font-medium relative after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1  after:h-1  after:animate-underlinePluse'>Brands </h3>
      
      <div className="rounded-xl  p-6 ">
        <InfiniteBrandScroll brands={brands} />
      </div>
    </section>
  )
}

export default BrandsPartner