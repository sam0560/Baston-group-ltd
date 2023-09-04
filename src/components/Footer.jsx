import Facebook from '../assets/images/social/facebook.png'
import Twitter from '../assets/images/social/twitter.png'
import Linkedin from '../assets/images/social/linkedin.png'

export default function Footer() {
  return (
    <>
      <main>
        <div className="bg-primary-black py-16">
            <div className="container grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-y-8">
                <ul className="text-secondary-light">
                    <li className="uppercase mb-4 font-bold">quick links</li>
                    <li className="mb-2 capitalize"><a href="#" className="hover:underline">contact us</a></li>
                    <li className="mb-2 capitalize"><a href="#" className="hover:underline">schedule call</a></li>
                    <li className="mb-2 capitalize"><a href="#" className="hover:underline">start free trial</a></li>
                    <li className="capitalize"><a href="#" className="hover:underline">call sales</a></li>
                </ul>
                <ul className="text-secondary-light">
                    <li className="uppercase mb-4 font-bold">quick links</li>
                    <li className="mb-2 capitalize"><a href="#" className="hover:underline">contact us</a></li>
                    <li className="mb-2 capitalize"><a href="#" className="hover:underline">schedule call</a></li>
                    <li className="mb-2 capitalize"><a href="#" className="hover:underline">start free trial</a></li>
                    <li className="capitalize"><a href="#" className="hover:underline">call sales</a></li>
                </ul>
                <ul className="text-secondary-light">
                    <li className="uppercase mb-4 font-bold">quick links</li>
                    <li className="mb-2 capitalize"><a href="#" className="hover:underline">contact us</a></li>
                    <li className="mb-2 capitalize"><a href="#" className="hover:underline">schedule call</a></li>
                    <li className="mb-2 capitalize"><a href="#" className="hover:underline">start free trial</a></li>
                    <li className="capitalize"><a href="#" className="hover:underline">call sales</a></li>
                </ul>
                <ul className="text-secondary-light">
                    <li className="uppercase mb-4 font-bold">quick links</li>
                    <li className="mb-2 capitalize"><a href="#" className="hover:underline">contact us</a></li>
                    <li className="mb-2 capitalize"><a href="#" className="hover:underline">schedule call</a></li>
                    <li className="mb-2 capitalize"><a href="#" className="hover:underline">start free trial</a></li>
                    <li className="capitalize"><a href="#" className="hover:underline">call sales</a></li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-4 py-8'>
            <p>
                © 2023 Workforce. All rights reserved. 
            </p>
            <span className='flex items-center gap-2'>
                <a href="#">
                <img src={Facebook} alt="facebook icon" />
                </a>
                <a href="#">
                <img src={Twitter} alt="twitter icon" />
                </a>
                <a href="#">
                <img src={Linkedin} alt="linkedin icon" />
                </a>
            </span>
        </div>
      </main>
    </>
  )
}
