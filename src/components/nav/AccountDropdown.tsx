import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CSS from 'csstype';

import '../../styles/nav/AccountDropdown.css';

import AccountSubDropdown from './AccountSubDropdown';

let dropdownPositionStyle: CSS.Properties = {
  left: 0,
  top: 0
}

interface AccountDropdownProps {
  left: number;
  top: number;
}

const AccountDropdown = ({left, top}: AccountDropdownProps) => {
  const [showSub, setShowSub] = useState('termspolicy');
 
  const navigate = useNavigate();

  useEffect(() => {
    const dropdown = document.getElementById('DROPDOWN');
    dropdown?.setAttribute("style", `left: ${left}px; top: ${top}px;`);
  }, [top, left])

  return (
    <div>
      <div id="DROPDOWN" className="AccountDropdownContainer" style={dropdownPositionStyle}>
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