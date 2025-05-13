import React from 'react';

const Input = ({ label, inputType = "text", errorText }) => {
  return (
    <div className="w-full">
      <div className="relative">
        <input
          type={inputType}
          placeholder=" "
          required
          className={`
            peer
            w-full
            pt-6 pb-2 px-4
            border rounded-md
            text-sm
            bg-transparent
            focus:outline-none focus:ring-2
            ${errorText 
              ? 'border-errorLight focus:ring-red-200' 
              : 'border-borderLight-hover dark:border-borderDark focus:ring-primaryLight dark:focus:ring-primaryDark'
            }
          `}
        />
        <label
          className={`
            absolute
            left-4
            top-0
            md:text-[1.2rem] lg:text-[1.2rem] 
            transition-all duration-200
            transform scale-100 translate-y-0
            origin-[0]
            peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100
            peer-focus:-translate-y-8 peer-focus:scale-75
            ${errorText ? 'text-red-500 peer-focus:text-red-600' : 'text-textLight-secondary dark:text-textDark-secondary peer-focus:text-primaryLight dark:peer-focus:text-primaryDark'}
          `}
        >
          {label}
        </label>
      </div>
      {errorText && (
        <span className="text-red-500 text-sm mt-1 block">
          {errorText}
        </span>
      )}
    </div>
  );
};
export default Input;
