import React, { Fragment } from 'react';
import SpotifySlider from '../SliderComponent/SpotifySlider';
import FooterComponent from "../FooterComponent/FooterComponent";
import "./HomeComponent.css"

const HomeComponent = () => {
    return (
        <Fragment>
            <main>
                <SpotifySlider />
            </main>
            <footer>
                <FooterComponent />
            </footer>
        </Fragment>
    )
}

export default HomeComponent;
