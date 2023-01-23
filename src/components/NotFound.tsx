import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      Not Found
      <Link to="/">GO HOME</Link>
    </div>
  );
}

export default NotFound;
