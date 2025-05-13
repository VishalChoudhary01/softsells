import React from 'react';

const Features = ({ heading, features }) => {
  return (
    <div className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8  transition-colors">
      <div className="max-w-7xl mx-auto font-poppins">
        
        <h2 className='w-full text-textLight-primary dark:text-textDark-primary after:bg-textLight-disabled after:dark:bg-textDark-disabled  text-center lg:text-4xl md:text-3xl text-2xl font-roboto-slab font-medium relative after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1  after:h-1  after:animate-underlinePluse'>{heading}</h2>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 lg:my-16 md:my-12 my-8">
          {features.map((feature, index) => (
            <article 
              key={index}
              className="bg-glass-bgLight dark:bg-glass-bgDark border-glass-bgLight dark:border-glass-borderDark border shadow-md hover:shadow-lg shadow-shadowLight dark:shadow-shadowDark  rounded-xl p-6 md:p-8 lg:p-10  transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 md:mb-6 lg:mb-8 text-textLight-primary dark:text-DarkToggleIcon">
                  {React.cloneElement(feature.icon, {
                    className: "w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                  })}
                </div>
                
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 dark:text-textDark-secondary text-textLight-secondary">
                  {feature.title}
                </h3>
                
                <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-textDark-disabled leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Features;