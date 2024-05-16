import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import LogoDark from '../assets/img/logo-dark.svg';
import LogoWhite from '../assets/img/logo-white.svg';
import { NavLink } from "react-router-dom";
import { BsFillSunFill, BsMoonFill, BsCheck } from 'react-icons/bs';
import Card1 from './Sub-comp/Card';
import GirlImg from '../assets/img/girl.png';
import Carousell from './Sub-comp/Carousel';
import NavbarWeb from './Navbar';
import Footer from './Sub-comp/Footer';

const Home = () => {
 
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    
    const html = document.querySelector('html');
    if (localStorage.getItem('theme') === 'dark') {
      html.classList.add('dark');
      setTheme('dark');
    } else {
      html.classList.remove('dark');
      setTheme('light');
    }
  }, [theme]);

 
  const handleThemeSwitch = () => {
    if (localStorage.getItem('theme') === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <section className='min-h-[740px] w-full bg-heroLight bg-cover bg-center bg-no-repeat overflow-hidden dark:bg-heroDark'>
    <NavbarWeb />
      <div className='container mx-auto px-4 lg:px-0'>
        {/* header */}
        <header className='flex items-center justify-between py-8'>

          {/* button */}
          <Button
          variant="secondary"
            onClick={handleThemeSwitch}
            className='p-6 bg-accent text-white rounded-full w-18 h-8 flex justify-center items-center'
          >
            {theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />}
          </Button>
        </header>
        {/* text & image wrapper */}
        <div className='flex flex-col items-center lg:flex-row min-h-[740px]' style={{marginTop:'-75px'}}>
          {/* text */}
          <div className='flex-1 flex flex-col justify-center items-start'>
            <h1 className='text-5xl text-primary font-bold mb-6 leading-[60px] dark:text-white'>
              Online Accounting <br />
              <span className='text-accent'>Fast & Uncomplicated</span>
            </h1>
            <p className='font-light text-grey mb-12 max-w-[520px] lead dark:text-white'>
              We specialize in small businesses. Our goal is to eliminate
              bureaucracy, creating a modern relationship between your company
              and the accountant.
            </p>
            {/* checked items */}
            <div className='flex flex-col gap-y-6 mb-12'>
              {/* item */}
              <div className='flex items-center gap-x-2'>
                {/* item icon */}
                <div className='bg-accent/10 text-accent w-[20px] h-[20px] rounded-full flex justify-center items-center dark:bg-accent/70 dark:text-white'>
                  <BsCheck />
                </div>
                {/* item text */}
                <p className='text-base font-light lead h6  dark:text-white'>
                  Have your accounting 100% online.
                </p>
              </div>
              {/* item */}
              <div className='flex items-center gap-x-2'>
                {/* item icon */}
                <div className='bg-accent/10 text-accent w-[20px] h-[20px] rounded-full flex justify-center items-center dark:bg-accent/70 dark:text-white'>
                  <BsCheck />
                </div>
                {/* item text */}
                <p className='text-base font-light lead h6  dark:text-white'>
                  Save with plans starting at &#8377;1000/month.
                </p>
              </div>
            </div>
            {/* button */}
            <NavLink to="/Services"><Button variant="outline-primary">Discover our Plans</Button></NavLink>
            {/* <button className='btn'>Discover our Plans</button> */}
          </div>
          {/* image */}
          <div className='hidden lg:flex self-end img-girl'>
            <img src={GirlImg} alt='' />
          </div>
        </div>
      </div>


      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 ">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Samsung_logo_blue.png"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/2/27/Logo_tata_200_200.png"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>



    <Card1 />

    <Carousell />

    <Footer />
    
    </section>

    
  );
};

export default Home;
