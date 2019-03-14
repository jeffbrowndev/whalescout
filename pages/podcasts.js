import React from "react";
import Layout from "./components/layout";
import styles from "./scss/app.scss";
import fetch from "isomorphic-unfetch";
import PodcastCard from "./components/podcastCard";
import ScrollAnimation from "react-animate-on-scroll";

class Podcasts extends React.Component {
  constructor(props) {
    super(props);
    this.searchBar = React.createRef();
    // Load poecasts into local state, necessary for search bar functionality
    this.state = { podcasts: props.podcasts, match: true };
  }
  search = e => {
    // What is currently typed in the search bar
    const podcasts = [...this.state.podcasts];
    const input = e.target.value.replace(/ /g, "").toLowerCase();
    // Check all podcasts to and try to find a match
    podcasts.forEach(podcast => {
      // Podcast content to search for (podcast title)
      const content = podcast.title.rendered.replace(/ /g, "").toLowerCase();
      // If podcast doesn't contain user input, remove from view
      podcast.visible = content.includes(input) ? true : false;
    });
    // Check to see if no matches were found
    const match = podcasts.some(podcast => podcast.visible);
    this.setState({ podcasts, match });
  };
  render() {
    return (
      <Layout>
        <div className={styles.podcast_header}>
          <ScrollAnimation animateIn="fadeIn">
            <h1>PODCAST</h1>
          </ScrollAnimation>
        </div>
        <div className={styles.search_bar}>
          <input
            ref={this.searchBar}
            placeholder="Search podcasts"
            onChange={this.search}
            autoFocus
          />
        </div>
        <div className={styles.podcast_cards}>
          {/* Render podcasts based on search bar input */}
          {!this.state.match && (
            <h1 className={styles.no_match}>
              Sorry, no podcasts match your search
            </h1>
          )}
          {this.state.podcasts.map(podcast => {
            if (podcast.visible) {
              return (
                <PodcastCard
                  key={podcast.slug}
                  title={podcast.title.rendered}
                  date={podcast.date}
                  slug={podcast.slug}
                />
              );
            }
          })}
        </div>
      </Layout>
    );
  }
}

Podcasts.getInitialProps = async function() {
  // Get ALL podcasts
  const podcasts = await fetch(
    `${process.env.DATABASE_URL}/wp-json/wp/v2/posts?categories=4&per_page=100`
  ).then(podcasts => podcasts.json());

  // Add a 'visible' property to each podcast for search bar functionality
  podcasts.map(podcast => {
    podcast.visible = true;
  });
  return { podcasts };
};

export default Podcasts;
