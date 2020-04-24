import React from 'react';
import Layout from '../layout/layout';

import './login.scss';
import { TextField, Button } from '@material-ui/core';

export default class Login extends React.Component {

    state = {
        username: "",
        password: "",
        usernameError: false,
        passwordError: false
    }

    constructor(public props) {
        super(props);
    }

    private loginOnClick() {
        let loginCheck: boolean = true;
        if (this.state.username == "") {
            this.setState({usernameError: true});
            loginCheck = false;
        }
        if (this.state.password == "") {
            this.setState({passwordError: true});
            loginCheck = false;
        }
        
        if (loginCheck) {
            alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
            this.setState({password: ""});
        }
    }

    private usernameOnChange(event) {
        let username: string = event.target.value;
        this.setState({username: username, usernameError: false});
    }

    private passwordOnChange(event) {
        let password: string = event.target.value;
        this.setState({password: password, passwordError: false});
    }

    private onKeyDown(ev) {
        if (ev.key === "Enter") {
            this.loginOnClick();
        }
    }

    render () {
        return (
            <Layout>
                <div className="login">
                    <div className="login-box">
                        <div className="login-box-username" onKeyDown={this.onKeyDown.bind(this)}>
                            <TextField
                                label="Username"
                                required={true}
                                value={this.state.username}
                                onChange={this.usernameOnChange.bind(this)}
                                error={this.state.usernameError}
                                variant="outlined"
                                margin="normal"
                            />
                        </div>
                        <div className="login-box-password" onKeyDown={this.onKeyDown.bind(this)}>
                            <TextField
                                label="Password"
                                required={true}
                                value={this.state.password}
                                onChange={this.passwordOnChange.bind(this)}
                                error={this.state.passwordError}
                                type="password"
                                variant="outlined"
                                margin="normal"
                            />
                        </div>
                        <div className="login-box-loginbutton">
                            <Button className="login-box-loginbutton-button" onClick={this.loginOnClick.bind(this)}>
                                Log in
                            </Button>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}