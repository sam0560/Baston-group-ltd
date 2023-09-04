import React from 'react'
import B1 from '../assets/images/building1.jpg'
import B2 from '../assets/images/building2.jpg'
import B3 from '../assets/images/building3.png'
import { Button } from 'flowbite-react'

export default function ProjectPortfolio() {
  return (
    <>
      <main className='container flex flex-col lg:flex-row items-center justify-center gap-x-8 gap-y-16 py-24' id='portfolio'>
        {/* Images */}
        <div className='flex gap-4 items-center'>
            <div className='flex flex-col gap-4'>
                <img src={B1} alt="building image 1" className='w-[350px]'/>
                <img src={B2} alt="building image 2" className='w-[350px]'/>
            </div>
            <div>
                <img src={B3} alt="building image 3" className='w-[350px]'/>
            </div>
        </div>
        {/* text */}
        <div className='flex-1'>
            <h2 className='text-3xl md:text-4xl uppercase font-bold'>
                our project <span className='text-primaryBlue'>portfolio</span>
            </h2>
            <p className='text-[#474747] py-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button className="bg-primaryBlue uppercase font-bold px-8">
                see all portfolio
            </Button>
        </div>
      </main>
    </>
  )
}
