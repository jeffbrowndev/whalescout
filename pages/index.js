import styles from "./scss/app.scss";
import React from "react";
import Head from "next/head";
import DesktopNavigation from "./components/desktopNavigation";
import MobileNavigation from "./components/mobileNavigation";
import Footer from "./components/footer";

class App extends React.Component {
  componentDidMount() {
    // Whale Scout API URL
    const url = "https://www.whalescout.org/wp-json";
    // Connect to Whale Scout API / load into state
    fetch(url)
      .then(res => res.json())
      .then(res => this.setState(res));
  }
  render() {
    return (
      <div>
        <Head>
          <title>Whale Scout</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className={`${styles.app} app`}>
          <DesktopNavigation />
          <MobileNavigation />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
