import Layout from './components/layout';
import fetch from 'isomorphic-unfetch';
import React from 'react';
import styles from './scss/app.scss';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = { event: {} };
  }
  componentDidMount() {
    fetch(
      `http://localhost/whalescout/wp-json/wp/v2/posts?slug=${
        this.props.url.query.slug
      }`
    )
      .then(res => res.json())
      .then(event => this.setState({ event: event[0].acf }));
  }
  render() {
    return (
      <Layout>
        <div className={styles.event_content} />
      </Layout>
    );
  }
}

export default Event;
