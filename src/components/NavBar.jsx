import {
  faFacebookSquare,
  faGooglePlusSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faAngleUp, faBars, faCross, faEnvelopeSquare, faMailBulk, faPhone, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  const [hover, setHover] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const[closeBar,setCloseBar]=useState(false)
  const[smBar,setSmBar]=useState(false)
// for drop menu
  const handleMouseIn = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
 console.log(smBar)

  const handleSmBar=() => {
    
    if (window.innerWidth <= 1215) {
      setSmBar(true);
    } else {
      setSmBar(false);
    }
  }

  useEffect(() => {
    console.log(window.innerWidth)
    window.addEventListener('resize',handleSmBar );

    return () => {
      window.removeEventListener('resize',handleSmBar);
    };
  }, []);

  useEffect(() => {
    if (hover) {
      const timeoutId = setTimeout(() => {
        setShowDropdown(true);
      }, 300);

      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      setShowDropdown(false);
    }
  }, [hover]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <section className='sticky z-50'>
      {!isScrolled && (
        <aside className={` flex justify-between text-white bg-gradient-to-r from-blue-400 to-blue-500  transform opacity-${!isScrolled ? 100 : 0} transition-opacity duration-300 fixed top-0 w-full`}>
          
          <span className="flex text-2xl mr-2">
          <a href=""><FontAwesomeIcon
              className="p-1 cursor-pointer hover:text-black duration-200"
              icon={faFacebookSquare}/> </a>
             <a href=""><FontAwesomeIcon
              className="p-1 cursor-pointer hover:text-black duration-200"
              icon={faTwitterSquare}/> </a>

            <a href=""><FontAwesomeIcon
              className="p-1 cursor-pointer hover:text-black duration-200"
              icon={faInstagramSquare}/> </a>

             <span className=' hover:text-black duration-200 text-lg mb-1 ml-3 flex items-center justify-center '><FontAwesomeIcon
              className="pr-1 "
              icon={faPhone}/>+222 49 86 86 24 </span>

            
          </span>

        </aside>
      )}
      <aside
        className={`flex justify-between items-center bg-slate-50 h-18 text-slate-600 ${
          isScrolled ? 'fixed top-0 duration-150' : 'fixed top-8 duration-150'
        } w-full shadow-md`}
      >
        <Link to="/">
        <span className="ml-10 flex items-center">

              <img
                  className="ml-1 pt-2 h-20 w-60"
                  src="./images/logo_1.png"
                  alt="./images/logo_2.png"
                />
                
                <img
                  className="h-18 w-24"
                  src="./images/logo_0.png"
                  alt="./images/logo_0.png"
                />
                <img
                  className="ml-1 pt-2 h-16 w-32"
                  src="./images/logo_2.png"
                  alt="./images/logo_2.png"
                />
          
        </span>

        </Link>
        


          <nav className='flex flex-col'>
            {smBar&& <FontAwesomeIcon className='text-4xl p-2 hover:bg-blue-500 hover:text-white hover:rounded-lg duration-200' icon={faBars}/>}
            {closeBar && <FontAwesomeIcon icon={faXmark}/>}
           {<div>


            </div>    } 




          </nav>


          {/* when its on full width */}
        {!smBar&&<nav className="text-2xl hidden flex-row items-center pl-10 text-blue-800 justify-between lg:flex">
          <ul className="flex px-3 justify-between items-center mr-10 font-bold">
            <li className="p-3 hover:bg-blue-500 hover:text-white rounded duration-100">
              <Link to="/">Home</Link>
            </li>
            <li className="p-3 hover:bg-blue-500 hover:text-white rounded duration-100">
              <Link to="/fields">Notre metiers</Link>
            </li>
            <li
              className="p-3 hover:bg-blue-500 hover:text-white rounded duration-100 cursor-pointer"
              onMouseEnter={handleMouseIn}
              onMouseLeave={handleMouseOut}
            >
              <p>
                Metiers{' '}
                <FontAwesomeIcon
                  className="text-lg"
                  icon={showDropdown ? faAngleDown : faAngleUp}
                />{' '}
              </p>
              {showDropdown && (
                <span className="bg-blue-400 absolute flex flex-col items-center justify-evenly w-46 py-5 px-9 rounded mr-5 mt-4 shadow-sm duration-200">
                  <Link
                    className="p-2 hover:border-b-4 rounded duration-100 text-lg"
                    to="/fields"
                  >
                    diabetologues
                  </Link>
                  <Link
                    className="p-2 hover:border-b-4 rounded duration-100 text-lg"
                    to="/fields">
                    endocrinologues
                  </Link>
                  <Link
                    className="p-2 hover:border-b-4 rounded duration-100 text-lg"
                    to="/fields"
                  >
                    cardiologues
                  </Link>
                  <Link
                    className="p-2 hover:border-b-4 rounded duration-100 text-lg"
                    to="/fields"
                  >
                    nephrologue
                  </Link>
                </span>
              )}
            </li>
            <li className="p-3 hover:bg-blue-500 hover:text-white rounded duration-200">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>}
      </aside>
    </section>
  );
}

export default NavBar;
