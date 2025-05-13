import React from 'react';
import { FaUpload, FaBalanceScale, FaMoneyCheckAlt } from 'react-icons/fa';

const HowWork = () => {
  const steps = [
    {
      icon: FaUpload,
      title: "Step 1: Upload Your License",
      description: "Submit your license keys securely via our encrypted platform."
    },
    {
      icon: FaBalanceScale,
      title: "Step 2: Get a Fair Valuation",
      description: "We analyze your license value based on age, usage rights, and demand."
    },
    {
      icon: FaMoneyCheckAlt,
      title: "Step 3: Get Paid Instantly",
      description: "Accept the offer and receive funds directly to your account."
    }
  ];

  return (
    <section className="py-12 px-4 md:py-16 lg:py-20">
        <h3 className='w-full text-textLight-primary dark:text-textDark-primary after:bg-textLight-disabled after:dark:bg-textDark-disabled text-center lg:text-4xl md:text-3xl text-2xl font-roboto-slab font-medium relative after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1  after:h-1  after:animate-underlinePluse'>How It Works</h3>
      <div className="max-w-7xl mx-auto lg:my-16 md:my-12 my-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <div className="flex flex-col font-roboto items-center text-center w-full md:w-1/3 p-6 bg-glass-bgLight dark:bg-glass-bgDark backdrop-blur-md border-glass-bgLight dark:border-glass-borderLight  rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 p-4 bg-bgLight-tertiary dark:bg-secondaryDark rounded-full">
                  <step.icon className="w-8 h-8 md:w-10 md:h-10  dark:text-textDark-secondary text-textLight-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
                  {step.description}
                </p>
              </div>

              {index !== steps.length - 1 && (
                <div className="hidden md:block flex-1 h-1 bg-gray-300 dark:bg-gray-600 mx-4 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-bgLight-tertiary dark:bg-secondaryDark rounded-full" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile timeline connector */}
        <div className="md:hidden mt-8 flex justify-center">
          <div className="w-1 h-full bg-gray-300 dark:bg-gray-600 relative">
            {steps.slice(0, -1).map((_, index) => (
              <div 
                key={index}
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded-full"
                style={{ top: `${(index + 1) * 33.33}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWork;