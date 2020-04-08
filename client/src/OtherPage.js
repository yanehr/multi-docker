import React from 'react';
import { Link } from 'react-router-dom';

export default() => {
  return (
    <div>
      Im some other pageg!
      <Link to="/">Go back home</Link>
    </div>
  );
};