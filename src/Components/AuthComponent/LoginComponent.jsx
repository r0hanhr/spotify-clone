import React, { Component, Fragment } from "react";
import "./Auth.css";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import { Link, withRouter } from "react-router-dom";

class LoginComponent extends Component {
    state = {
        email: "",
        password: "",
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };
    handleSubmit = async e => {
        e.preventDefault();
        let { email, password } = this.state;
        let { history, match, location } = this.props;
        try {
            let userData = await firebase.auth().signInWithEmailAndPassword(email, password);
            if (userData.user.emailVerified === true) {
                toast.success(`successfully ${email} loggedin`);
                history.push("/")
            } else {
                toast.error(`${email} is yet to verified...`);
                history.push("/login");
            }
        } catch (err) {
            toast.error(err.message);
        }
    }
    render() {
        let { email, password } = this.state;
        return (
            <Fragment>
                <section id="authSection" className="col-md-4 mx-auto my-2 card">
                    <article className="card-body">
                        <h4>To continue, log in to Spotify.</h4>
                        <p id="phone-auth">
                            <Link style={{ textDecoration: "none", color: "#555" }} to="/phone-auth">Continue with Phone Number</Link>
                        </p>
                        <form autoComplete="off" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email address or username</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </div>
                            <p>
                                <Link to="/password-reset">Forgot password</Link>
                            </p>
                            <div>
                                <input type="checkbox" /> remember me
                            </div>
                            <div className="form-group">
                                <button>Login</button>
                            </div>
                        </form>
                    </article>
                </section>
            </Fragment>
        );
    }
}

export default withRouter(LoginComponent);
