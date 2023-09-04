import { Button } from "flowbite-react";
import BgImage from '../assets/images/callToAction.png'

export default function CallToAction() {
  return (
    <>
      <div className='
        grid 
        place-content-center
        min-h-[300px]
        text-center 
        uppercase
        text-secondary
        customImg
        ' id="contact">
            <div className='container'>
                <h2 className='text-3xl md:text-4xl font-bold py-4 max-w-[40rem]'>
                    explore career opportunities with baston group
                </h2>
                <div className='flex justify-center'>
                    <Button className="
                        bg-transparent 
                        border-secondary 
                        rounded-md 
                        uppercase 
                        font-bold 
                        my-8
                        ">
                        contact us
                    </Button>
                </div>
            </div>
        </div>
    </>
  )
}
