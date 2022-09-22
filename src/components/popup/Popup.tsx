import { Outlet } from 'react-router-dom';

import "../../styles/popup/Popup.css";

const Popup = (props: any, { className='portal', el='div'}) => {

  return (
    <div className="overlay">
      <div className="popupContainer">
        <Outlet />
      </div>
    </div>
  )
}

export default Popup;
