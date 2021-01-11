import React from 'react';
import SocialLogin from 'react-social-login';

function SocialButton(props) {
    const { triggerLogin, ...rest } = props;
    return (
        <button className="btn-light" onClick={triggerLogin} {...rest}>
            {props.children}
        </button>
    );
}

export default SocialLogin(SocialButton);
