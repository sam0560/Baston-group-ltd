import Rate from '../assets/images/5star.svg'
import { Card } from 'flowbite-react'
import Img1 from '../assets/images/review/R1.png'
import Img2 from '../assets/images/review/R2.png'
import Img3 from '../assets/images/review/R3.png'
import Img4 from '../assets/images/review/R4.png'


export default function ReviewList() {
    const reviews = [
        {
            name: 'albus dumbledore',
            comment: 'Buyer buzz partner network disruptive non-disclosure agreement business',
            role: 'Manager @ Howarts',
            img: [Img1]
        },
        {
            name: 'albus dumbledore',
            comment: 'Buyer buzz partner network disruptive non-disclosure agreement business',
            role: 'Manager @ Howarts',
            img: [Img2]
        },
        {
            name: 'albus dumbledore',
            comment: 'Buyer buzz partner network disruptive non-disclosure agreement business',
            role: 'Manager @ Howarts',
            img: [Img3]
        },
        {
            name: 'albus dumbledore',
            comment: 'Buyer buzz partner network disruptive non-disclosure agreement business',
            role: 'Manager @ Howarts',
            img: [Img4]
        }
    ]
  return (
    <>
        <div className='
            container 
            relative
            -top-16
            overflow-auto
            '>
            <div className='
                flex
                justify-center
                items-center
                gap-8
                w-[70rem]
                lg:w-auto
            '>
                {reviews.map((review) => (
                    <Card className="max-w-[20rem] shadow-sm rounded-md z-20" key="">
                        <div>
                            <img src={Rate} alt="rating" />
                            <p className='py-5 text-sm leading-normal'>
                                <q>
                                    {review.comment}
                                </q>
                            </p>
                            <div className='flex items-center justify-stretch gap-4 text-sm'>
                                <img src={review.img} alt="..." className='w-9 aspect-square'/>
                                <div className='text-primary-black'>
                                    <p className='capitalize'><b>{review.name}</b></p>
                                    <span>{review.role}</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    </>
  )
}
