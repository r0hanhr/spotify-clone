import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const SpotifyMenuComponent = () => {
    return (
        <Fragment>
            <ul>
                <li><Link to="/">Premium</Link></li>
                <li><Link to="/">Support</Link></li>
                <li><Link to="/">Download</Link></li>
                <li><Link to="/signup">signup</Link></li>
                <li><Link to="/login">login</Link></li>
            </ul>
        </Fragment>
    )
}

export default SpotifyMenuComponent;
