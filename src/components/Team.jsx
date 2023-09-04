import TeamList from "./TeamList";

export default function Team() {
  return (
    <>
        <div>
            <div>
                <div className="container bg-gray-50 rounded-lg mb-20">
                    <div className=" pt-16">
                        <div className='
                            grid
                            place-content-center
                            text-center
                            uppercase
                        '>
                            <small className='text-lg text-primaryBlue'>team</small>
                            <h2 className='text-3xl md:text-4xl font-bold py-4'>meet our <span className="text-primaryBlue">members</span></h2>
                        </div>
                    </div>
                    <div>
                        <TeamList />
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}
