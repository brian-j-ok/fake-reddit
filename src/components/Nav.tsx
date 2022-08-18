import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <div className="nav">
        <div className="logo-sub-search">
          <div className="logo">
            <Link to="/">
              <img src="" alt="" />
              <img src="" alt="" />
            </Link>
          </div>
          <div className="sub">

          </div>
          <div className="search">

          </div>
        </div>
        <div className="account">
          <div className="login">
            <button>Log In</button>
            <button>Sign Up</button>
          </div>
          <div>Account Info</div>
        </div>
      </div>
    </header>
  )
}

export default Nav;