import React, { Component, Fragment } from "react";
import "./Auth.css"
import { withRouter } from "react-router-dom";
import firebase from "firebase";
import { toast } from "react-toastify";

class PasswordReset extends Component {
    state = {
        email: "",
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = async e => {
        let { email } = this.state;
        try {
            e.preventDefault();
            await firebase.auth().sendPasswordResetEmail(email);
            toast.success(`change password has been sent to ${email} please reset password`);
            this.props.history.push("/password-reset");
        } catch (err) {
            toast.error(err.message);
            this.props.history.push("/password-reset");
        }
    };
    render() {
        let { email } = this.state;
        return (
            <Fragment>
                <section id="authSection" className="col-md-4 mx-auto my-2 card">
                    <article className="card-body">
                        <h4>Password Reset</h4>
                        <p>
                            Enter your Spotify username, or the email address that you used to
                            register. We'll send you an email with your username and a link to
                            reset your password.
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
                                <button>SEND</button>
                            </div>
                        </form>
                    </article>
                </section>
            </Fragment>
        );
    }
}

export default withRouter(PasswordReset);
