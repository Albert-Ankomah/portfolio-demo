import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Link } from "react-router-dom"

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
            <Menu className="text-orange-800" />
        </button>
        
      </SheetTrigger>
      <SheetContent side="right" className="w-64 bg-gray-200 p-6">
        <nav className="flex flex-col items-center justify-center">
            <Link to = '/' className="links">About</Link>
            <Link to = '/research' className="links">Research & Projects</Link>
            <Link to = '/experience' className="links">Experience</Link>
            <Link to='/personal' className="links">Personal</Link>
            <Link to='/cv' className="links">CV & Contact Method</Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav

