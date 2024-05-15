import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const LinkButton = ({ text, to, variant }) => {
  return (
    <Link to={to}>
      <Button variant={variant}>{text}</Button>
    </Link>
  );
};

export default LinkButton;
