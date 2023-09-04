// import { Card } from 'flowbite-react'
import { Button } from 'flowbite-react'

// Images
import Img1 from '../assets/images/teams/img1.png'
import Img2 from '../assets/images/teams/img2.png'
import Img3 from '../assets/images/teams/img3.png'
import Img4 from '../assets/images/teams/img4.png'
import Img5 from '../assets/images/teams/img5.png'
import Img6 from '../assets/images/teams/img6.png'
import Img7 from '../assets/images/teams/img7.png'
import Img8 from '../assets/images/teams/img8.png'

export default function TeamList() {


    const teamMembers = [
        {
            id: 1,
            name: 'Olivia Rhye',
            role: 'Engineering Manager',
            brief: 'Lorem ipsum dolor amet consectetur eli sed eiusmod tempor incididunt',
            img: [Img1]
        },
        {
            id: 2,
            name: 'Phoenix Baker',
            role: 'Engineering Manager',
            brief: 'Lorem ipsum dolor amet consectetur eli sed eiusmod tempor incididunt',
            img: [Img2]
        },
        {
            id: 3,
            name: 'Lana Steiner',
            role: 'Engineering Manager',
            brief: 'Lorem ipsum dolor amet consectetur eli sed eiusmod tempor incididunt',
            img: [Img3]
        },
        {
            id: 4,
            name: 'Demi Wilkinson',
            role: 'Engineering Manager',
            brief: 'Lorem ipsum dolor amet consectetur eli sed eiusmod tempor incididunt',
            img: [Img4]
        },
        {
            id: 5,
            name: 'Candice Wu',
            role: 'Engineering Manager',
            brief: 'Lorem ipsum dolor amet consectetur eli sed eiusmod tempor incididunt',
            img: [Img5]
        },
        {
            id: 6,
            name: 'Natali Craig',
            role: 'Engineering Manager',
            brief: 'Lorem ipsum dolor amet consectetur eli sed eiusmod tempor incididunt',
            img: [Img6]
        },
        {
            id: 7,
            name: 'Drew Cano',
            role: 'Engineering Manager',
            brief: 'Lorem ipsum dolor amet consectetur eli sed eiusmod tempor incididunt',
            img: [Img7]
        },
        {
            id: 8,
            name: 'Orlando Diggs',
            role: 'Engineering Manager',
            brief: 'Lorem ipsum dolor amet consectetur eli sed eiusmod tempor incididunt',
            img: [Img8]
        }
    ]

    // const sliceShow = teamMembers.slice(0,4)
    // console.log(sliceShow.length);
    // console.log(teamMembers.length);
  return (
    <>
      <div className='list-grid px-2 md:px-8 lg:px-16 mt-4'>
        {
            teamMembers.map((member) => (
                <div key={member.id}>
                    <img src={member.img} alt={member.name + ' image'} />
                    <h3 className='text-lg text-gray-900 mt-2 font-semibold'>{member.name}</h3>
                    <p className='text-base text-primaryBlue py-2'>{member.role}</p>
                    <p className='text-sm text-gray-500'>{member.brief}</p>
                </div>
            ))
        }
      </div>
        <div className='flex justify-center'>
            <Button className="bg-primaryBlue uppercase font-bold my-12">
                view all team members
            </Button>
        </div>
    </>
  )
}
