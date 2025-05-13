import React from 'react';

const InfiniteBrandScroll = ({ brands }) => {
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 animate-infinite-scroll hover:[animation-play-state:paused]">
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand.id}-${index}`}
            className="flex-shrink-0 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="h-10 w-20 object-contain transition-all duration-300 hover:scale-105
                       sm:h-12 sm:w-24 
                       md:h-14 md:w-28 
                       lg:h-16 lg:w-32 
                       xl:h-20 xl:w-40"
            />
          </div>
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bgLight dark:from-bgDark to-transparent md:w-24 lg:w-32 xl:w-48" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bgLight dark:from-bgDark to-transparent md:w-24 lg:w-32 xl:w-48" />
    </div>
  );
};

export default InfiniteBrandScroll;