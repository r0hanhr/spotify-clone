import React, { Component, Fragment } from "react";
import Signup from "./Components/AuthComponent/Signup";
import FooterComponent from "./Components/FooterComponent/FooterComponent";
import SpotifyNavBar from "./Components/HeaderComponent/SpotifyNavBar";
import SpotifySlider from "./Components/SliderComponent/SpotifySlider";
class App extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <header>
          <SpotifyNavBar />
        </header>
        <main>
          <SpotifySlider />
        </main>
        <footer>
          <FooterComponent />
        </footer>
        <main>
          <Signup />
        </main>
      </Fragment>
    );
  }
}

export default App;
