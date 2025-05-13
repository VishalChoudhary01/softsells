import React from 'react'
import Features from '../Features'
import { FaClockRotateLeft,FaLock } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
const WhyChooseUs = () => {
    const features = [
    {
      title: "Secure Transactions",
      icon: <FaLock />,
      description: "Transactions are encrypted, compliant, and legally backed."
    },
    {
      title: "Instant Quotes",
      icon: <FaClockRotateLeft />,
      description: "Get real-time license valuations within seconds."
    },
    {
      title: "Top Payouts",
      icon: <GrMoney />,
      description: "We offer some of the best resale prices in the industry."
    },
    
  ];

  return (
    <section id="why">
        <Features 
      heading="Why Choose Us"
      features={features}
    />
    </section>
  )
}

export default WhyChooseUs
