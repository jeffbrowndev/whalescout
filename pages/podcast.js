import React from "react";
import Navigation from "./components/navigation";
import Header from "./components/head";
import Footer from "./components/footer";

class Podcast extends React.Component {
  componentDidMount() {
    // Whale Scout API URL
    const podcast = 1;
    const url = `https://www.whalescout.org/wp-json/wp/v2/posts?categories=${podcast}`;
    // Connect to Whale Scout API / load into state
    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ data: res }));
  }
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <h1>Podcast</h1>
        <Footer />
      </div>
    );
  }
}

export default Podcast;
