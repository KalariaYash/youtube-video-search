import React from 'react';
import Button from '@material-ui/core/Button';

const SimpleButton = ({ onClick, label }) => {
  return (
    <Button id="login" variant="outlined" color="primary" size="large" style={{ margin: '16px 0px' }} className="Login" onClick={onClick}>
      {label}
    </Button>
  );
}

export default SimpleButton;