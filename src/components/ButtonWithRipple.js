import React from 'react';
import Ripple from 'react-ripple-effect';
import './ButtonWithRipple.css'; // Asigură-te că stilurile sunt incluse

function ButtonWithRipple() {
  return (
    <Ripple>
      <button className="ripple-button">Click Me</button>
    </Ripple>
  );
}

export default ButtonWithRipple;
