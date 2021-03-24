import React, { Component, Fragment } from "react";
import SpotifyLogo from "./LogoComponent/SpotifyLogo";
import firebase from "../../firebase";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./SpotifyNavBar.css";
class SpotifyNavbar extends Component {
    signOut = _ => {
        firebase
            .auth()
            .signOut()
            .then(_ => {
                toast.success("successfully logged out from this app");
                this.props.history.push("/login");
            })
            .catch(err => toast.error(err.message));
    };

    render() {
        let { displayName, email, photoURL } = this.props.user;
        let IsAnonymousUser = () => (
            <Fragment>
                <li>
                    <Link to="/signup"> Signup</Link>
                </li>
                <li>
                    <Link to="/login"> Login</Link>
                </li>
            </Fragment>
        );
        let IsAuthenticatedUser = () => (
            <Fragment>
                <li><a href="/">{displayName}</a></li>
                <li><a href="/">{email}</a></li>
                <li><img src={photoURL} alt={displayName} /></li>
                <li>
                    <a href="#" onClick={this.signOut}>Logout</a>
                </li>
            </Fragment>
        );

        return (
            <Fragment>
                <section id="spotifyNavBarBlock">
                    <article>
                        <div className="logoBlock">
                            <Link to="/">
                                <SpotifyLogo />
                            </Link>
                        </div>
                        <div className="menuBlock">
                            <Fragment>
                                <nav>
                                    <ul>
                                        <li>
                                            <Link to="/"> premium</Link>
                                        </li>
                                        <li>
                                            <Link to="/"> Support</Link>
                                        </li>
                                        <li>
                                            <Link to="/"> Download</Link>
                                        </li>
                                        {this.props.user.emailVerified === true ||
                                            this.props.user.isAnonymous === false ? (
                                            <IsAuthenticatedUser />
                                        ) : (
                                            <IsAnonymousUser />
                                        )}
                                    </ul>
                                </nav>
                            </Fragment>
                        </div>
                    </article>
                </section>
            </Fragment>
        );
    }
}

export default withRouter(SpotifyNavbar);