import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const loc = useLocation().pathname;
  return (
    <nav className="navbar">
      {['/', '/input', '/themes', '/preview', '/download', '/deploy']
         .map((p, i) => (
           <Link key={i} to={p} className={loc === p ? 'active' : ''}>
             {['Home','Edit','Themes','Preview','Download','Deploy'][i]}
           </Link>
      ))}
    </nav>
  );
};

export default Navbar;
