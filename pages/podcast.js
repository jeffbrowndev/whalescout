import Layout from "./components/layout";
import fetch from "isomorphic-unfetch";
import React from "react";
import styles from "./scss/app.scss";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
const moment = require("moment");

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
          date: podcast[0].date,
          description: podcast[0].content.rendered.replace(/\n/g, "<br>"),
          acf: podcast[0].acf
        })
      );
  }
  render() {
    // Below are podcast details with defaults available when no information is provided
    return (
      <Layout>
        <div className={styles.article_content}>
          <Link href="/podcasts">
            <p className={styles.podcast_back}>
              <u>Back to all podcasts</u>
            </p>
          </Link>
          <h2>{this.state.date ? moment(this.state.date).format("LL") : ""}</h2>
          <h1>{this.state.title ? ReactHtmlParser(this.state.title) : ""}</h1>
          <div className={styles.article_body}>
            {this.state.description
              ? ReactHtmlParser(this.state.description)
              : ""}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Podcast;
