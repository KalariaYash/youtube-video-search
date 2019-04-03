import React from 'react';
import Button from '@material-ui/core/Button';

class SimpleButton extends React.Component{
    render() {
        return(
         <Button id="login" variant="outlined" color="primary" size="large" style={{margin:'16px 0px'}} className="Login" onClick={this.props.onClick}>
            {this.props.label}
         </Button>
        )
    }
}

export default SimpleButton;