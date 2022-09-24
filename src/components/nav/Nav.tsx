import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/nav/Nav.css';

import AccountDropdown from './AccountDropdown';

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  return (
    <header className="headerProps bodyText headerHeight">
      <div className="navContainer">
        <div className="searchContainer">
          <Link to="/" aria-label="Home" className="logo">
            <svg className="logo-pic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
               <g>
                 <circle fill="#FF4500" cx="10" cy="10" r="10"></circle>
                 <path fill="#FFF" d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"></path>
               </g>
             </svg>
             <svg className="logo-text" viewBox="0 0 57 18" xmlns="http://www.w3.org/2000/svg">
               <g fill="#1c1c1c">
                 <path d="M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"></path>
                 <circle fill="#FF4500" cx="47.26" cy="3.44" r="2.12"></circle>
                 <path d="M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"></path>
                 <path d="M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"></path>
                 <path d="M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"></path>
                 <path d="M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"></path>
                 <path d="M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"></path>
               </g>
             </svg>
          </Link>
          <div className="searchBar">
            <div className="searchFormContainer searchBorder">
              <form action="/search/" className="searchForm" method="get" role="search">
                <label className="searchIcon" htmlFor="header-search-bar">
                  <div aria-hidden="true" className="searchIcon__container">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                      <path d="m15.833 16.292-4.937-4.938q-.625.479-1.375.74-.75.26-1.479.26-1.834 0-3.104-1.271Q3.667 9.812 3.667 8q0-1.812 1.271-3.083 1.27-1.271 3.083-1.271 1.812 0 3.094 1.271Q12.396 6.188 12.396 8q0 .792-.281 1.542-.282.75-.74 1.312l4.958 4.958Zm-7.791-4.604q1.541 0 2.614-1.063T11.729 8q0-1.562-1.073-2.625T8.042 4.312q-1.563 0-2.636 1.063Q4.333 6.438 4.333 8t1.073 2.625q1.073 1.063 2.636 1.063Z"/>
                    </svg>
                    </div>
                </label>
                <input type="search" className="searchInput" name="q" placeholder='Search Reddit' />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="accountContainer">
          <div className="accountOptions">
            <div className="authButtons">
              <Link to="/popup/login" aria-label="Log In" className="logInButton accountButton__font accountButton__box">
                Log In
              </Link>
              <Link to="/popup/register" aria-label="Sign Up" className="registerButton accountButton__font accountButton__box">
                Sign Up
              </Link>
            </div>
            <div className="accountInfo">
              <div className="header-user-dropdown">
                <button aria-expanded="false" aria-haspopup="true" id="USER_DROPDOWN_ID" onClick={() => toggleDropdown()}
                  className="userDropdown__content userDropdown__border userDropdown__margin userDropdown__align">
                  <span className="accountIconContainer">
                    <span className="accountIconFace">
                      <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
                        <path d="M20 18.958q-2.083 0-3.479-1.396-1.396-1.395-1.396-3.479 0-2.083 1.396-3.479T20 9.208q2.083 0 3.479 1.396t1.396 3.479q0 2.084-1.396 3.479-1.396 1.396-3.479 1.396ZM8.333 31.042V28.5q0-1.083.625-1.958t1.625-1.375q2.459-1.084 4.792-1.646 2.333-.563 4.625-.563t4.625.563q2.333.562 4.75 1.646 1.042.5 1.667 1.375t.625 1.958v2.542Zm1.417-1.417h20.5V28.5q0-.583-.396-1.146-.396-.562-1.104-.937-2.208-1.084-4.354-1.563-2.146-.479-4.396-.479t-4.417.479q-2.166.479-4.333 1.563-.708.375-1.104.937-.396.563-.396 1.146ZM20 17.542q1.458 0 2.458-1 1-1 1-2.459 0-1.458-1-2.458-1-1-2.458-1-1.458 0-2.458 1-1 1-1 2.458 0 1.459 1 2.459t2.458 1Zm0-3.459Zm0 15.542Z"/>
                      </svg>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
                      <path d="m20 24.5-8.833-8.833 1-1L20 22.5l7.833-7.833 1 1Z"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        { showDropdown ? (
          <AccountDropdown />
        ) : (
          <div />
        )}
    </header>
  )
}

export default Nav;