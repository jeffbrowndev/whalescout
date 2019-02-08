import Layout from './components/layout';
import fetch from 'isomorphic-unfetch';
import React from 'react';
import styles from './scss/app.scss';
import ReactAudioPlayer from 'react-audio-player';

class Podcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { podcast: {} };
  }
  componentDidMount() {
    fetch(
      `http://localhost/whalescout/wp-json/wp/v2/posts?slug=${
        this.props.url.query.slug
      }`
    )
      .then(res => res.json())
      .then(podcast => this.setState({ podcast: podcast[0].acf }));
  }
  render() {
    const podcast = this.state.podcast;
    // Below are podcast details with defaults available when no information is provided
    return (
      <Layout>
        <h1>{podcast.podcast_title}</h1>
        <p>{podcast.podcast_description}</p>
        <ReactAudioPlayer src={podcast.podcast_mp3} autoPlay controls />
      </Layout>
    );
  }
}

export default Podcast;
