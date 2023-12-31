import './App.scss';
import Desktop from './Desktop';
import Mobile from './Mobile';

import React, { useState, useEffect } from 'react';

export default function App() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  useEffect(() => {

    const handleSize = () => {
      setwindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  // console.log(window.innerWidth)

  const isMobile = windowWidth <= 600;

  return (
    <div>
      {isMobile ? <Mobile/> : <Desktop/>}
    </div>
  );
}