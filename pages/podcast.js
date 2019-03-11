import Layout from "./components/layout";
import fetch from "isomorphic-unfetch";
import React from "react";
import styles from "./scss/app.scss";
import ReactAudioPlayer from "react-audio-player";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";

class Podcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { main: {}, acf: {} };
  }
  componentDidMount() {
    fetch(
      `${process.env.DATABASE_URL}/wp-json/wp/v2/posts?slug=${
        this.props.url.query.slug
      }`
    )
      .then(res => res.json())
      .then(podcast =>
        this.setState({
          title: podcast[0].title.rendered,
          description: podcast[0].content.rendered,
          acf: podcast[0].acf
        })
      );
  }
  render() {
    const podcast = this.state.acf;
    // Below are podcast details with defaults available when no information is provided
    return (
      <Layout>
        <div className={styles.podcast_content}>
          <Link href="/podcasts">
            <p className={styles.podcast_back}>
              <u>Back to all podcasts</u>
            </p>
          </Link>
          <h2>{podcast.podcast_date}</h2>
          <h1>{this.state.title}</h1>
          <ReactAudioPlayer
            className={styles.podcast_player}
            src={podcast.podcast_mp3}
            controls
          />
          <p>{ReactHtmlParser(this.state.description)}</p>
          <div className={styles.image_container}>
            <img src={podcast.podcast_image} />
            <p>{podcast.podcast_image_caption}</p>
          </div>
          <p className={styles.podcast_subscribe}>
            Subscribe:{" "}
            <span>
              <a href="https://itunes.apple.com/us/podcast/whale-scout/id883873149?mt=2&ls=1#episodeGuid=https%3A%2F%2Fwww.whalescout.org%2F%3Fp%3D3592">
                Apple Podcasts
              </a>
            </span>{" "}
            |{" "}
            <span>
              <a href="https://subscribeonandroid.com/www.whalescout.org/feed/podcast/">
                Android
              </a>
            </span>{" "}
            |{" "}
            <span>
              <a href="#">RSS</a>
            </span>
          </p>
        </div>
      </Layout>
    );
  }
}

export default Podcast;
