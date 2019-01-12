import React from 'react';
import styles from '../scss/eventSlider.scss';
import Event from './event';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
const ellipsis = require('text-ellipsis');

// Get all everts
const getAllEvents = gql`
  {
    posts(where: { categoryId: 4 }) {
      edges {
        node {
          date
          title
          content
          featuredImage {
            sourceUrl
          }
          author {
            name
          }
        }
      }
    }
  }
`;

class EventSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: null };
  }
  componentDidMount() {
    // Load events into local state
    fetch('https://www.whalescout.org/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(events => this.setState({ events }));
  }
  // Handle required fields
  isImage(event) {
    //
  }
  isDescription(event) {
    //
  }
  isTitle(event) {
    //
  }
  isDate(event) {
    //
  }
  render() {
    // All events, shortened
    const events = this.props.data.posts.edges;
    return (
      <div className={styles.event_slider}>
        {/* // Display all upcoming events and remove old ones */}
        {events.map(event => {
          return (
            <Event
              date={this.isDate(event)}
              title={this.isTitle(event)}
              description={this.isDescription(event)}
              image={this.isImage(event)}
            />
          );
        })}
      </div>
    );
  }
}

export default graphql(getAllEvents)(EventSlider);
