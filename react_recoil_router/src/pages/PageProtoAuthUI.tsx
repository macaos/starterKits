import React, { useState } from 'react';
import { css } from 'emotion';
import classnames from 'classnames';

const PageProtoAuthUI = () => {
    return (
        <div>
            <ZZAuthUI />
        </div>
    );
};

const ZZAuthUI = () => {

    const [stepCD, setStepCD] = useState('signin');

    return (
        <div className="ZZAuthUI">
            <div className="kareui-template-04 kareui-wrapper">

                <div className="section-top">
                    <div className="btn-group">
                        <div className="nav nav-tabs">
                            <div onClick={() => {
                                setStepCD('signin');
                            }} className={classnames(["nav-item", { "active": stepCD === "signin" }])}>
                                SIGN IN
					        </div>
                            <div onClick={() => {
                                setStepCD('signup');
                            }} className={classnames(["nav-item", { "active": stepCD === "signup" }])}>
                                SIGN UP
					        </div>
                        </div>
                        <div className="nav-active">
                            <div className={classnames(["underline", stepCD])}></div>
                        </div>
                    </div>
                </div>


                <div className={`tab-content ${stepCD}`}>

                    <div className={classnames(["tab-pane", { "active": stepCD === "signin" }])} id="signin">

                        <form className="section form-box" action="" method="post" name="form">
                            <label htmlFor="username">Username</label>
                            <input className="form-styling" type="text" name="username" placeholder="" />
                            <label htmlFor="password">Password</label>
                            <input className="form-styling" type="text" name="password" placeholder="" />

                            <button className="btn-login">
                                LOGIN
					</button>
                        </form>

                        <div className="forgot">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                    <div className={classnames(["tab-pane", { "active": stepCD === "signup" }])} id="signup">
                        <form className="section form-box" action="" method="post" name="form">
                            <label htmlFor="username">Username</label>
                            <input className="form-styling" type="text" name="username" placeholder="" />
                            <label htmlFor="email">Password</label>
                            <input className="form-styling" type="text" name="email" placeholder="" />
                            <label htmlFor="password">Password Confirm</label>
                            <input className="form-styling" type="text" name="password" placeholder="" />

                            <button className="btn-login">
                                JOIN
					</button>
                        </form>

                        <div className="forgot">
                            <a href="#">Already a member?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageProtoAuthUI;