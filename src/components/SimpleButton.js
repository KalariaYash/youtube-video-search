import React from 'react';
import Button from '@material-ui/core/Button';

function SimpleButton(props) {
  return (
    <Button id="login" variant="outlined" color="primary" size="large" style={{ margin: '16px 0px' }} className="Login" onClick={props.onClick}>
      {props.label}
    </Button>
  );
}

export default SimpleButton;