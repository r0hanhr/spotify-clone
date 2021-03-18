import React, { Component, Fragment } from "react";
import "./Auth.css";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import md5 from "md5";

class SignupComponent extends Component {
    state = {
        email: "",
        confirmEmail: "",
        password: "",
        profile: "",
        dob: "",
        gender: "",
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = async e => {
        e.preventDefault();
        try {
            let { email, confirmEmail, password, profile, dob, gender } = this.state;
            console.log([email, confirmEmail, password, profile, dob, gender]);
            // authentication
            let userData = await firebase.auth().createUserWithEmailAndPassword(email, password);
            userData.user.sendEmailVerification();
            let message = `Verification mail has been sent to ${email} please confirm it and login`;
            toast.success(message);
            //gravatar
            userData.user.updateProfile({
                displayName: profile,
                photoURL: `https://www.gravatar.com/avatar/${md5(email)}?d=identicon`
            })
            //store information to realtime database
            await firebase.database().ref("/users" + userData.user.uid).set({
                email: userData.email,
                photoURL: userData.photoURL,
                profile: userData.profile
            })
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    }
    render() {
        let { email, confirmEmail, password, profile, dob, gender } = this.state;
        return (
            <Fragment>
                <section id="authSection" className="col-md-4 mx-auto card">
                    <article>
                        <h2>Sign up with your email address</h2>
                        <form autoComplete="off" onSubmit={this.handleSubmit}>
                            {/* email */}
                            <div className="form-group">
                                <label>What's your email?</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange}
                                />
                            </div>

                            {/* confirm email */}
                            <div className="form-group">
                                <label>Confirm your email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email again"
                                    name="confirmEmail"
                                    value={confirmEmail}
                                    onChange={this.handleChange}
                                />
                            </div>

                            {/* password */}
                            <div className="form-group">
                                <label>Create a password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Create a password."
                                    name="password"
                                    value={password}
                                    onChange={this.handleChange}
                                />
                            </div>

                            {/* profile */}
                            <div className="form-group">
                                <label>What should we call you?</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter a profile name"
                                    name="profile"
                                    value={profile}
                                    onChange={this.handleChange}
                                />
                            </div>

                            {/* date of birth */}
                            <div className="form-group">
                                <label>What's your date of birth?</label>
                                <input
                                    type="datetime-local"
                                    className="form-control"
                                    name="dob"
                                    value={dob}
                                    onChange={this.handleChange}
                                />
                            </div>

                            {/* gender */}
                            <div className="form-group" name="gender" value={gender}>
                                <label>What's your gender?</label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    onChange={this.handleChange}
                                />
                Male
                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    onChange={this.handleChange}
                                />
                Female
              </div>

                            {/* check data */}
                            <div className="form-group">
                                <input type="checkbox" name="checkdata" />
                Share my registration data with Spotify's content providers for
                marketing purposes.
              </div>

                            <div className="form-group">
                                <p>
                                    By clicking on Sign up, you agree to Spotify's
                  <a href="#">Terms and Conditions of Use.</a>
                                </p>
                                <p>
                                    To learn more about how Spotify collects, uses, shares and
                                    protects your personal data please read Spotify's
                  <a href="#">Privacy Policy.</a>
                                </p>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success btn-block">Sign up</button>
                            </div>
                        </form>
                    </article>
                </section>
            </Fragment>
        );
    }
}

export default SignupComponent;
