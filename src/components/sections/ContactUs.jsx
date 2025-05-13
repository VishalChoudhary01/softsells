import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import Input from '../ui/Input';
import Contact from '/contact.jpg'
import Button from '../ui/Button/Button';
import {motion} from 'motion/react'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    license: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    license: '',
    message: ''
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.license) newErrors.license = 'Please select a license type';
    if (formData.message.length < 20) newErrors.message = 'Message must be at least 20 characters';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <section id="contact" className='flex flex-col w-full items-center py-12 lg:py-16 px-4 sm:px-6 lg:px-8 transition-colors'>
      <motion.h3
      initial={{ opacity: 0, y: -150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
       className='w-full max-w-7xl text-textLight-primary dark:text-textDark-primary after:bg-textLight-disabled after:dark:bg-textDark-disabled text-center lg:text-4xl md:text-3xl text-2xl font-roboto-slab font-medium relative after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-1 after:animate-underlinePluse'>
        Get In Touch
      </motion.h3>

      <div className='w-full max-w-7xl flex flex-col md:flex-row justify-center gap-8 lg:my-16 md:my-12 my-8'>
        {/* Image Section */}
        <motion.article
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
         className='md:w-1/2 hidden md:block rounded-xl overflow-hidden shadow-shadowLight dark:shadow-shadowDark'>
          <img 
            src={Contact} 
            alt="Contact us" 
            className='w-full h-full object-cover'
          />
        </motion.article>

        {/* Form Section */}
        <motion.form 
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className='w-full md:w-1/2 lg:space-y-9 md:space-y-6 space-y-8 bg-glass-bgLight dark:bg-glass-bgDark border-glass-bgLight dark:border-glass-borderDark border rounded-xl p-6 md:p-8 lg:p-10 shadow-shadowLight dark:shadow-shadowDark'
        >
          {/* Name Input */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}  
            transition={{ duration: 0.5 }}>

          <Input
            label="Full Name *"
            inputType="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            errorText={errors.name}
            />
            </motion.div>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}  
            transition={{ duration: 0.5 }}>
          <Input
            label="Email Address *"
            inputType="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            errorText={errors.email}
            />
            </motion.div>

          {/* Company Input */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}  
            transition={{ duration: 0.5 }}>

          <Input
            label="Company Name"
            inputType="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            />
        </motion.div>

          {/* License Type Dropdown */}
          <motion.div 
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}  
            transition={{ duration: 0.5 }}
          className="w-full  text-textLight-primary dark:text-textDark-primary bg-transparent  ">
            <div className="relative">
              <select
                name="license"
                value={formData.license}
                onChange={handleChange}
                className={`
                  peer
                  w-full
                  pt-6 pb-2 px-4
                  border rounded-md
                  text-sm md:text-[1.2rem] lg:text-[1.2rem]
                  bg-transparent
                  focus:outline-none focus:ring-2
                  appearance-none
                  ${errors.license 
                    ? 'border-red-500 focus:ring-red-200' 
                    : 'border-borderLight dark:border-borderDark focus:ring-primaryLight dark:focus:ring-primaryDark'
                  }
                `}
                required
              >
                <option value="Microsoft" className='b text-textLight-primary dark:bg-bgDark dark:text-textDark-primary hover:dark:bg-buttonDark-hover '>Microsoft</option>
                <option value="Adobe" className='bg-bgLight text-textLight-primary dark:bg-bgDark dark:text-textDark-primary hover:dark:bg-buttonDark-hover '>Adobe</option>
                <option value="Autodesk" className='bg-bgLight text-textLight-primary dark:bg-bgDark dark:text-textDark-primary hover:dark:bg-buttonDark-hover '>Autodesk</option>
                <option value="VMware" className='bg-bgLight text-textLight-primary dark:bg-bgDark dark:text-textDark-primary hover:dark:bg-buttonDark-hover '>VMware</option>
                <option value="Other" className='bg-bgLight text-textLight-primary dark:bg-bgDark dark:text-textDark-primary hover:dark:bg-buttonDark-hover '>Other</option>
              </select>
              <label className={`
                absolute
                left-4
                top-0
                text-sm
                transition-all duration-200
                transform scale-100 translate-y-0
                origin-[0]
                peer-placeholder-shown:translate-y-3 
                peer-placeholder-shown:scale-100
                peer-focus:-translate-y-8 
                peer-focus:scale-75
                ${errors.license 
                  ? 'text-red-500 peer-focus:text-red-600' 
                  : 'text-textLight-secondary dark:text-textDark-secondary peer-focus:text-primaryLight dark:peer-focus:text-primaryDark'
                }
              `}>
                License Type *
              </label>
              <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-textLight-secondary dark:text-textDark-secondary text-sm" />
            </div>
            {errors.license && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.license}
              </span>
            )}
          </motion.div>

          {/* Message Textarea */}
          <motion.div 
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          className="w-full">
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                required
                minLength={20}
                className={`
                  peer
                  w-full
                  pt-6 pb-2 px-4
                  border rounded-md
                  text-sm
                  bg-transparent
                  focus:outline-none focus:ring-2
                  resize-none
                  h-32
                  ${errors.message 
                    ? 'border-red-500 focus:ring-red-200' 
                    : 'border-borderLight dark:border-borderDark focus:ring-primaryLight dark:focus:ring-primaryDark'
                  }
                `}
              />
              <label className={`
                absolute
                left-4
                top-0
            text-sm md:text-[1.2rem] lg:text-[1.2rem]

                transition-all duration-200
                transform scale-100 translate-y-0
                origin-[0]
                peer-placeholder-shown:translate-y-3 
                peer-placeholder-shown:scale-100
                peer-focus:-translate-y-8 
                peer-focus:scale-75
                ${errors.message 
                  ? 'text-red-500 peer-focus:text-red-600' 
                  : 'text-textLight-secondary dark:text-textDark-secondary peer-focus:text-primaryLight dark:peer-focus:text-primaryDark'
                }
              `}>
                Your Message *
              </label>
            </div>
            {errors.message && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.message}
              </span>
            )}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          className='w-full flex md:justify-start justify-center '>

        <Button buttoType='submit'  buttonText={"Send Message"} buttonStyles={"lg:text-xl md:text-md  lg:px-6 lg:py-3 md:px-4 md:py-2.5 px-3 py-2 rounded-lg cursor-pointer bg-buttonLight text-buttonLightText dark:text-buttonDarkText dark:bg-buttonDark"}/>

          </motion.div>
        
        
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;