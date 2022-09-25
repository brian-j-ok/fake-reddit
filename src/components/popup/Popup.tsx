import { Outlet, useNavigate } from 'react-router-dom';

import "../../styles/popup/Popup.css";

const Popup = () => {
  const navigate = useNavigate();

  return (
    <div className="overlay">
      <div className="popupContainer">
        <Outlet />
        <button className="closePopupButton" onClick={() => navigate("/")}>
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="closePopupButton__image">
            <polygon fill="inherit" points="11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"></polygon>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Popup;
