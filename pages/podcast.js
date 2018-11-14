import React from "react";
import Navigation from "./components/navigation";
import Header from "./components/head";
import Footer from "./components/footer";

class Podcast extends React.Component {
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
