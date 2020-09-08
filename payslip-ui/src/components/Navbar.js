import React from 'react';

const Navbar = ({ title = 'Dashboard' }) => {
  return <div className="navbar text-align">{title}</div>;
};

export default Navbar;
