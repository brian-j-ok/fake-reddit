import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/nav/AccountDropdown.css';

import AccountSubDropdown from './AccountSubDropdown';

const AccountDropdown = () => {
  const [showSub, setShowSub] = useState('termspolicy');
 
  const navigate = useNavigate();

  return (
    <div>
      <div className="AccountDropdownContainer">
        <div>
          <button className="AccountDropdownButton" type="button">
            <span className="AccountDropdownButton_container">
              <span className="AccountDropdownButton__icon">
                <i className="icon icon-history" />
              </span>
              <span className="AccountDropdownButton__text">Recent Communities</span>
              <i className="AccountDropdownButton__dropdown"/>
            </span>
          </button>

          <button className="AccountDropdownButton" type="button">
            <span className="AccountDropdownButton_container">
              <span className="AccountDropdownButton__icon">
                <i className="icon icon-history" />
              </span>
              <span className="AccountDropdownButton__text">Terms & Policies</span>

              <i className="AccountDropdownButton__dropdown"/>
            </span>
          </button>

          { showSub === 'termspolicy' ? (
            <AccountSubDropdown />
          ) : (
            <div />
          )}

          <button className="AccountDropdownButton" type="button" onClick={() => navigate("/popup/login")}>
            <span className="AccountDropdownButton_container">
              <span className="AccountDropdownButton__icon">
                <i className="icon icon-history" />
              </span>
              <span className="AccountDropdownButton__text">Sign Up or Log In</span>

              {/* create state for subdropdowns, mapping? */}
              <i className="AccountDropdownButton__dropdown"/>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
};

export default AccountDropdown;