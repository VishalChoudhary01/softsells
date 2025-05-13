import React from 'react'
import softSells from '/softSells.svg?url'
const Logo = () => {

  return (
    <div className="flex flex-col items-center justify-center">
        <img src={softSells} alt="Soft Sells Logo" className="lg:h-[10rem] lg:w-[10rem] md:w-[8rem] md:h-[8rem] h-28 w-28 drop-shadow-teal-200 dark:drop-shadow-teal-700 drop-shadow-sm " />
    </div>
  )
}

export default Logo