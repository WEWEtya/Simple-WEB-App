import React from "react";
import { Link } from 'react-router-dom';

const Button = ({ to, text, className }) => (
    <Link to={to}>
      <button className={className}>{text}</button>
    </Link>
  );

  export default Button;