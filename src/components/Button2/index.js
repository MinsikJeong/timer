import React from 'react';
import { Button } from "react-bootstrap";

const Button2 = ({onPress}) => {
  return (
    <Button onClick={onPress}>처음부터 다시..</Button>
  )
}

export default Button2;
