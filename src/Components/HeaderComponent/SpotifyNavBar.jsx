import React, { Fragment } from 'react';
import SpotifyLogo from './LogoComponent/SpotifyLogo';
import SpotifyMenuComponent from './MenuComponent/SpotifyMenuComponent';
import "./SpotifyNavBar.css";
import { Link } from "react-router-dom";


const SpotifyNavBar = () => {
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
                        <SpotifyMenuComponent />
                    </div>
                </article>
            </section>
        </Fragment>
    )
}

export default SpotifyNavBar;
