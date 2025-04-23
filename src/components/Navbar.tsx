import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <div>
      <ul className="hidden md:flex">
            <li><NavLink to = '/' className={({isActive}) => `links ${isActive ? "underline underline-offset-4 text-orange-800 text-lg": ''}`}>Home</NavLink></li>
            <li><NavLink to='/research' className={({ isActive }) => `links ${isActive ? "underline underline-offset-4 text-orange-800 text-lg" : ''}`}>Research</NavLink></li>
            <li><NavLink to = '/teaching' className={({isActive}) => `links ${isActive ? "underline underline-offset-4 text-orange-800 text-lg": ''}`}>Teaching</NavLink></li>
            <li><NavLink to = '/experience' className={({isActive}) => `links ${isActive ? "underline underline-offset-4 text-orange-800 text-lg": ''}`}>Experience</NavLink></li>
            <li><NavLink to = '/contact' className={({isActive}) => `links ${isActive ? "underline underline-offset-4 text-orange-800 text-lg": ''}`}>Contact</NavLink></li>
            <li><NavLink to='/personal' className={({isActive}) => `links ${isActive ? "underline underline-offset-4 text-orange-800 text-lg": ''}`}>Personal</NavLink></li>
            <li><NavLink to='/cv' className={({isActive}) => `links ${isActive ? "underline underline-offset-4 text-orange-800 text-lg": ''}`}>CV</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
