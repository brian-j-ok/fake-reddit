import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frame from 'react-frame-component';

import Login from '../components/Login';
import Register from '../components/Register';
import Reset from '../components/Reset';

import "../styles/Popup.css";
import { Console } from 'console';

const Popup = (props: any, { className='portal', el='div'}) => {
  const [contentRef, setContentRef] = useState(<Login changeRef={(ref: any) => setContentRef(ref)} />);

  const [container] = useState(() => {;
    return document.createElement(el);
  })

  useEffect(() => {
    container.classList.add(className);
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container)
    };
  }, []);

  if(!props.seen) return null;

  return ReactDom.createPortal(
    <div className="overlay">
      <div className="popupContainer">
        <p onClick={props.onClose} className="close-btn">X</p>
        {contentRef}
      </div>
    </div>,
    document.body
  )
}

export default Popup;
