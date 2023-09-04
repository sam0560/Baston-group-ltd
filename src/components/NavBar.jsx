import { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import Menu from '../assets/images/menu.svg'
import CloseMenu from '../assets/images/close_menu.svg'
import NavLinks from './NavLinks'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () =>{
        setIsOpen(!isOpen);
    }
  return (
    <>
      <nav className='container navFlex'>
        <div>
            <img src={Logo} alt="Company logo" className='w-44 md:w-56'/>
        </div>
        <div>
            <ul className='gap-4 hidden md:flex w-full'>
                <NavLinks />
            </ul>
        </div>
        {/* Menu icon for mobile view */}
        <div className='md:hidden'>
            <button onClick={toggleNavbar}>
                {isOpen? <img src={CloseMenu} alt="menu icon to toggle mobile view"/> : <img src={Menu} alt="menu icon to toggle mobile view"/>}
            </button>
        </div>
        {
            isOpen && (
                <div className='mobileNavLink'>
                    <NavLinks/>
                </div>
            )
        }
      </nav>
    </>
  )
}
