import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'; // Import CSS file for styling
import CartIcon from '../img/shopping-cart_6442372.png';
import Logo from '../img/shopping-bag_5734786.png'; // Import your logo image

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="navbar-logo" />
        <em>
          Group<span>-10</span>
        </em>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
        </ul>
      </div>
      <div className="navbar-right">
        <NavLink to="/cart" className="register-btn" activeClassName="active">
          <img src={CartIcon} alt="View Cart" className="cart-logo" />
        </NavLink>
      </div>
    </nav>
  );
}
