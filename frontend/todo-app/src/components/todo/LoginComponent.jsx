import { Component } from "react";
import AuthenticationService from "./AuthenticationService";

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "TestUserName",
            password: "",
            loginSucc: false,
            loginFail: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        //this.handlePwdChange = this.handlePwdChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]:
                event.target.value
        })
    }

    loginClicked() {
        // AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
        //     .then(
        //         () => {
        //             AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //             this.props.navigate(`/welcome/${this.state.username}`)
        //         }
        //     ).catch(
        //         () => {
        //             this.setState({ loginSucc: false })
        //             this.setState({ loginFail: true })
        //         }

        //     )


        AuthenticationService.executeJWTAuthenticationService(this.state.username, this.state.password)
            .then(
                (response) => {
                    AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                    this.props.navigate(`/welcome/${this.state.username}`)
                }
            ).catch(
                () => {
                    this.setState({ loginSucc: false })
                    this.setState({ loginFail: true })
                }

            )

    }

    // handlePwdChange(event) {
    //     this.setState({ password: event.target.value })
    // }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.loginSucc && <div className="alert alert-warning">Login Successed</div>}
                    {this.state.loginFail && <div className="alert alert-warning">Login Failed</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-outline-secondary" onClick={this.loginClicked}>Login</button>
                </div>
            </div>

        )
    }
}

export default LoginComponent