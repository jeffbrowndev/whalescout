import styles from "./scss/app.scss";
import React from "react";
import Header from "./components/head";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}, // Wordpress database
      currentPage: "test"
    };
  }
  componentDidMount() {
    // Whale Scout API URL
    const url = "https://www.whalescout.org/wp-json";
    // Connect to Whale Scout API / load into state
    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ data: res }));
  }
  render() {
    return (
      <div className={`${styles.app} app`}>
        <Header />
        <Navigation />
        <h1>Home Page</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
