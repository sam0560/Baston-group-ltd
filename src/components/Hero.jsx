import { Button } from 'flowbite-react'
import Rectangle from '../assets/images/hero_rec.png'

export default function Hero() {
    const achievements = [
        {
            count: '500+',
            des: 'clients'
        },
        {
            count: '100+',
            des: 'construction'
        },
        {
            count: '1 Million+',
            des: 'rate & review'
        },
        {
            count: '2 M+',
            des: 'engagement'
        },
    ]
  return (
    <>
        <div className="myBg bg-cover bg-center min-h-[50vh] relative overflow-hidden">
            <div className='container flex flex-col'>
                <div className='py-40 text-gray-900 lg:text-secondary z-10'>
                    <h1 className='text-4xl md:text-5xl font-bold max-w-[30rem] uppercase'>
                        Business minded <span className='font-light'>solution</span>
                    </h1>
                    <p className='py-8 max-w-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco.
                    </p>
                    <Button className="bg-secondary-light text-primaryBlue font-bold uppercase px-8">
                        more about us
                    </Button>
                </div>
            </div>

            {/* Achievements */}
            <img src={Rectangle} className='absolute top-0 -left-96 mix-blend-multiply hidden lg:block'/>
        </div>
        <div className="lg:flex items-center justify-center mb-12 hidden">
            <div className="container bg-secondary shadow-lg py-8 absolute rounded-lg">
                <div className='flex justify-center items-center gap-4 md:gap-20'>
                {
                    achievements.map((ach) => (
                        <div className='flex items-center gap-4 md:gap-20' key={ach.count}>
                            <div className='w-[4px] h-[47px] bg-primaryBlue'></div>
                            <div className='text-center'>
                                <p className='
                                text-primaryBlue
                                text-lg
                                md:text-3xl
                                font-bold
                                font-["inter", sans-serif]'>
                                    {ach.count}
                                </p>
                                <span className='text-gray-600 text-xs md:text-lg capitalize'>{ach.des}</span>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    </>
  )
}
