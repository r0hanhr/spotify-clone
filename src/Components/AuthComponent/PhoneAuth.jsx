import React, { Component, Fragment } from "react";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import { withRouter } from "react-router-dom";
class PhoneAuth extends Component {
    state = {
        phone: "",
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        try {
            e.preventDefault();
            let captchaVerifier = new firebase.auth.RecaptchaVerifier(
                "recaptcha-container"
            );
            firebase
                .auth()
                .signInWithPhoneNumber(this.state.phone, captchaVerifier)
                .then(confirmationResult => {
                    let otp = window.prompt("please enter valid OTP");
                    confirmationResult
                        .confirm(otp)
                        .then(result => {
                            toast.success(`successfully ${this.state.phone} logged in`);
                            this.props.history.push("/");
                            console.log(result.user);
                        })
                        .catch(err => toast.error(err.message));
                })
                .catch(err => {
                    toast.error(err.message);
                });
        } catch (err) { }
    };
    render() {
        let { phone } = this.state;
        return (
            <Fragment>
                <section id="authSection" className="col-md-4 mx-auto my-2 card">
                    <article className="card-body">
                        <h1>Enter Phone Number</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="text"
                                    placeholder="Enter valid phone number"
                                    name="phone"
                                    value={phone}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div id="recaptcha-container"></div>
                            <div className="form-group">
                                <button className="btn btn-success">NEXT</button>
                            </div>
                        </form>
                    </article>
                </section>
            </Fragment>
        );
    }
}

export default withRouter(PhoneAuth);
