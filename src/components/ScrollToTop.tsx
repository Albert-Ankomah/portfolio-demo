import { useEffect, useState } from 'react'

const ScrollToTop = () => {

  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    }

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } 

  return (
    <button className='fixed bottom-4 md:bottom-19 right-4 bg-orange-800 text-white p-2 rounded-full' onClick={scrollToTop} style={{display: isVisible ? 'inline' : 'none'}}>
      Top
    </button>
  )
}

export default ScrollToTop
