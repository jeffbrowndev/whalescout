import React from 'react';
import Layout from './components/layout';
import styles from './scss/app.scss';
import fetch from 'isomorphic-unfetch';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from 'react-html-parser';
import classnames from 'classnames';

class Resources extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.other.length);
  }
  render() {
    return (
      <Layout>
        <div className={styles.resources_header}>
          <ScrollAnimation animateIn='fadeIn'>
            <h1>RESOURCES</h1>
          </ScrollAnimation>
        </div>
        {/* Book Club */}
        <div
          className={classnames(
            styles.article_section,
            styles.resource_container
          )}
        >
          <h1>Whale Scout Book Club Reading List as of 2019</h1>
          <div className={styles.line} />
          {this.props.bookClub.map(resource => {
            return (
              <div className={styles.resource}>
                <a href={resource.acf.resource_url || null} target='_blank'>
                  <p>{resource.title.rendered}</p>
                </a>
                <p>{ReactHtmlParser(resource.content.rendered)}</p>
              </div>
            );
          })}
        </div>
        {/* Children's Books */}
        <div
          className={classnames(
            styles.article_section,
            styles.resource_container
          )}
        >
          <h1>Children's Books</h1>
          <div className={styles.line} />
          {this.props.childrensBooks.map(resource => {
            return (
              <div className={styles.resource}>
                <a href={resource.acf.resource_url || null} target='_blank'>
                  <p>{resource.title.rendered}</p>
                </a>
                <p>{ReactHtmlParser(resource.content.rendered)}</p>
              </div>
            );
          })}
        </div>
        {/* Films */}
        <div
          className={classnames(
            styles.article_section,
            styles.resource_container
          )}
        >
          <h1>Films</h1>
          <div className={styles.line} />
          {this.props.films.map(resource => {
            return (
              <div className={styles.resource}>
                <a href={resource.acf.resource_url || null} target='_blank'>
                  <p>{resource.title.rendered}</p>
                </a>
                <p>{ReactHtmlParser(resource.content.rendered)}</p>
              </div>
            );
          })}
        </div>
        {/* Other Resources */}
        {this.props.other.length > 0 ? (
          <div
            className={classnames(
              styles.article_section,
              styles.resource_container
            )}
          >
            <h1>Additional Links & Resources</h1>
            <div className={styles.line} />
            {this.props.other.map(resource => {
              return (
                <div className={styles.resource}>
                  <a href={resource.acf.resource_url || null} target='_blank'>
                    <p>{resource.title.rendered}</p>
                  </a>
                  <p>{ReactHtmlParser(resource.content.rendered)}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
      </Layout>
    );
  }
}

Resources.getInitialProps = async function() {
  // Get ALL resources
  const resources = await fetch(
    `https://admin.whalescout.org/wp-json/wp/v2/posts?categories=7&per_page=100`
  ).then(resources => resources.json());

  const bookClub = resources.filter(
    resource => resource.acf.resource_type == 'Book Club'
  );
  const childrensBooks = resources.filter(
    resource => resource.acf.resource_type == "Children's Book"
  );
  const films = resources.filter(
    resource => resource.acf.resource_type == 'Film'
  );
  const other = resources.filter(
    resource => resource.acf.resource_type == 'Other'
  );

  return { resources, bookClub, childrensBooks, films, other };
};

export default Resources;
