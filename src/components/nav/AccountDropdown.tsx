import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CSS from 'csstype';

import '../../styles/nav/AccountDropdown.css';

import AccountSubDropdown from './AccountSubDropdown';

interface AccountDropdownProps {
  right: number;
  top: number;
}

const AccountDropdown = ({right, top}: AccountDropdownProps) => {
  const [showSub, setShowSub] = useState('termspolicy');
 
  const navigate = useNavigate();

  useEffect(() => {
    const dropdown = document.getElementById('DROPDOWN');
    dropdown?.setAttribute("style", `left: ${(right - 252)}px; top: ${top}px;`);
  }, [right, top]);

  return (
    <div>
      <div id="DROPDOWN" className="AccountDropdownContainer">
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