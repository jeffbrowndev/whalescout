import Layout from './components/layout';
import fetch from 'isomorphic-unfetch';
import React from 'react';
import styles from './scss/app.scss';
import Link from 'next/link';
const moment = require('moment');
import ReactHtmlParser from 'react-html-parser';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = { main: {}, acf: {} };
  }
  componentDidMount() {
    fetch(
      `http://lederconsulting.dreamhosters.com/wp-json/wp/v2/posts?slug=${
        this.props.url.query.slug
      }`
    )
      .then(res => res.json())
      .then(article =>
        this.setState({
          title: article[0].title.rendered,
          date: article[0].date,
          description: article[0].content.rendered.replace(/\n\n\n\n/g, '<br>'),
          image: article[0].acf.featured_image.sizes.large
        })
      );
  }
  render() {
    const article = this.state;
    return (
      <Layout>
        <div className={styles.article_content}>
          <Link href='./news'>
            <u>Back to all news</u>
          </Link>
          <h2>{moment(article.date).format('LL')}</h2>
          <h1>{article.title}</h1>
          {/* <div className={styles.article_image_container}>
            <img src={article.image} />
          </div> */}
          <div className={styles.article_body}>
            {ReactHtmlParser(article.description)}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Article;
