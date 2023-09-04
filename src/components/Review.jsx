import ReviewList from "./ReviewList";

export default function Review() {
  return (
    <>
      <main className='relative'>
        <div className='
        grid 
        place-content-center 
        bg-primaryBlue 
        min-h-[300px] 
        text-center 
        uppercase
        text-secondary-light
        '>
            <div className='container'>
                <small className='text-lg'>reviews</small>
                <h2 className='text-3xl md:text-4xl font-bold py-4'>what users speak about us</h2>
            </div>
        </div>

      </main>

        {/* Review Carousel */}
        <ReviewList />
    </>
  )
}
