import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({
  title = 'Dashboard',
  isBtn,
  Icon,
  IconText,
  rightText,
  redirectLink,
  redirectIcon,
}) => {
  return (
    <div>
      {isBtn ? (
        <div className="navbar text-align iconBtn">
          <Link to={redirectIcon}>
            <div>
              {Icon} {IconText}
            </div>
          </Link>
          <div>{title}</div>
          <Link to={redirectLink}>
            <div>{rightText}</div>
          </Link>
        </div>
      ) : (
        <div className="navbar text-align">{title}</div>
      )}
    </div>
  );
};

export default Navbar;
