import { Button, Card } from 'flowbite-react'
import Img1 from '../assets/images/services/architecture.png'
import Img2 from '../assets/images/services/engineering.png'
import Img3 from '../assets/images/services/construction.png'
import Img4 from '../assets/images/services/design.png'


export default function Services() {
    const services = [
        {
            service: 'architecture',
            brief: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor',
            img: [Img1],
            href: '#',
        },
        {
            service: 'engineering',
            brief: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor',
            img: [Img2],
            href: '#',
        },
        {
            service: 'construction',
            brief: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor',
            img: [Img3],
            href: '#',
        },
        {
            service: 'design & building',
            brief: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor',
            img: [Img4],
            href: '#',
        }
    ]
  return (
    <>
        <div id='services'>
            <div className='
                grid
                place-content-center
                text-center
                uppercase
            '>
                <small className='text-lg text-primaryBlue'>what we do</small>
                <h2 className='text-3xl md:text-4xl font-bold py-4 text-primaryBlue'>our services</h2>
            </div>
        </div>
        <div className='overflow-auto'>
            <div className='
                container
                flex
                justify-center
                items-center
                gap-8
                w-[70rem]
                lg:w-auto
                pt-4
            '>
                {
                    services.map((service) => (
                        <Card className='max-w-[15rem] shadow-sm rounded-md bg-primaryBlue py-4'>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='w-16 aspect-square rounded-full bg-[#EEF8FF] flex justify-center items-center'>
                                    <img src={service.img} alt={service.service + ' icon'} className='px-4 py-4'/>
                                </div>
                                <div className='text-secondary-light text-center'>
                                    <h3 className='text-lg mt-8 font-semibold capitalize'>{service.service}</h3>
                                    <p className='text-sm py-4'>{service.brief}</p>
                                    <a href={service.href} className='underline text-sm'>Learn more</a>
                                </div>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </div>
        <div className='flex justify-center'>
            <Button className="
            border-primaryBlue 
            text-primaryBlue 
            bg-transparent 
            uppercase 
            font-bold
            my-12
            ">
                view all services
            </Button>
        </div>
    </>
  )
}
