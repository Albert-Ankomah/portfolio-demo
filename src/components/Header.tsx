import MobileNav from './MobileNav';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className='border-b-3 border-b-orange-800'>
      <div className='container mx-auto px-4 py-3 flex justify-between items-center'>

        <h3 className='text-3xl font-bold tracking-tight italic rounded-full bg-orange-800 text-white text-center hover:scale-110 transform transition-all duration-300 ease-in-out cursor-pointer'>GO</h3>

        {/* Mobile and Desktop Navigation */}
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:flex">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
