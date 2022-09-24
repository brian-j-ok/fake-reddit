import { Link } from 'react-router-dom';

import '../../styles/nav/AccountDropdown.css'

const AccountSubDropdown = () => {
  return (
    <div className="SubDropdownContainer">
      <Link className="SubDropdown__link" to="https://www.redditinc.com/policies/user-agreement">
        <span className="SubDropdown__text">User Agreement</span>
      </Link>
    </div>
  )
};

export default AccountSubDropdown;