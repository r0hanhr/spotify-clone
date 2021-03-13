import React, { Fragment } from 'react';
import SpotifyLogo from './LogoComponent/SpotifyLogo';
import SpotifyMenuComponent from './MenuComponent/SpotifyMenuComponent';
import "./SpotifyNavBar.css";

const SpotifyNavBar = () => {
    return (
        <Fragment>
            <section id="spotifyNavBarBlock">
                <article>
                    <div className="logoBlock">
                        <a href="#">
                            <SpotifyLogo/>
                        </a>
                    </div>
                    <div className="menuBlock">
                            <SpotifyMenuComponent/>
                    </div>
                </article>
            </section>
        </Fragment>
    )
}

export default SpotifyNavBar;
