/* eslint-disable no-unused-vars */
import {userEffecet, useRef } from 'react'
import { useEffect } from 'react'; // Corrigi um erro de digitação na importação
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const navLinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/doctors',
    display: 'Find a Doctor',
  },
  {
    path: '/services',
    display: 'Services',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
];

const Header = () => {
  return (
    <header className='header flex items-center'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/*============logo===========*/}
          <div>
            <img src={logo} width={"100px"} alt="" />
          </div>

          {/*============menu===========*/}
          <div className='navigation'>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.path} activeClassName="active">
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
