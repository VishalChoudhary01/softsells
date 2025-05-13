import React from 'react';
import { FaQuoteLeft, FaUser } from 'react-icons/fa';
import { testimonials } from '../../constants/data';

const Testimonials = () => {
  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto"> 
        
        <h2 className='w-full text-textLight-primary dark:text-textDark-primary after:bg-textLight-disabled after:dark:bg-textDark-disabled text-center lg:text-4xl md:text-3xl text-2xl font-roboto-slab font-medium relative after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1  after:h-1  after:animate-underlinePluse'>Customer Testimonials</h2>


        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-8 lg:my-16 md:my-12 my-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-glass-bgLight dark:bg-glass-bgDark border-glass-bgLight dark:border-glass-borderDark border shadow-md hover:shadow-lg shadow-shadowLight dark:shadow-shadowDark  rounded-lg p-5 md:p-6 lg:p-7  transition-shadow duration-200"
            >
              <div className="flex flex-col gap-4 md:gap-5">
                <div className="text-textLight-primary dark:text-DarkToggleIcon">
                  <FaQuoteLeft className="w-6 h-6 md:w-7 md:h-7" /> 
                </div>

                <blockquote className="text-base md:text-lg text-textLight-secondary dark:text-textDark-secondary leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="mt-3 border-t pt-4 md:pt-5 border-shadowLight dark:border-shadowDark flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-bgLight-tertiary dark:bg-bgDark-secondary flex items-center justify-center">
                      <FaUser className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div>
                    <h3 className="text-sm md:text-base font-medium dark:text-white">
                      {testimonial.author}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 font-medium dark:text-gray-400">
                      {testimonial.role}
                    </p>
                    <p className="text-xs md:text-sm text-textLight-primary dark:text-textDark-primary font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;