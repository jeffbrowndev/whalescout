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
    const event = this.state.event;
    // Below are event details with defaults available when no information is provided
    return (
      <Layout>
        <div className={styles.event_content}>
          {/* Title */}
          {event.title ? <h1>{event.title}</h1> : <h1>Helpin' Out Event!</h1>}
          {/* Location */}
          {event.location_name ? <h2>{`@ ${event.location_name}`}</h2> : ''}
          {/* Description */}
          {event.description ? (
            <p className={styles.event_description}>{event.description}</p>
          ) : (
            <p className={styles.event_description}>
              No event details at this time
            </p>
          )}
          {/* Image */}
          {event.image ? (
            <img src={event.image} />
          ) : (
            <img src='./static/images/ws_home_header.svg' />
          )}
          {/* Image caption */}
          {event.image_caption ? (
            <p className={styles.event_caption}>{event.image_caption}</p>
          ) : (
            ''
          )}
          <h3>Event Details:</h3>
          <ul>
            {/* Date */}
            {event.date ? <li>{`Date: ${event.date}`}</li> : ''}
            {/* Time */}
            {event.start_time ? (
              <li>
                {`Time: ${event.start_time}`}
                {event.end_time ? <span>{` - ${event.end_time}`}</span> : ''}
              </li>
            ) : (
              'Check back for details!'
            )}

            {/* Address */}
            {event.location_name ? (
              <li>
                {`Location: ${event.location_name}`}
                {event.location_address ? (
                  <span>{`, ${event.location_address}`}</span>
                ) : (
                  ''
                )}
              </li>
            ) : (
              'Check back for details!'
            )}
            {/* What to bring */}
            {event.what_to_bring ? (
              <li>{`What to bring: ${event.what_to_bring}`}</li>
            ) : (
              ''
            )}
            {/* Provided */}
            {event.provided ? <li>{`Provided: ${event.provided}`}</li> : ''}
            {/* Age rescrictions */}
            {event.age_restrictions > 0 ? (
              <li>{`Youth under the age of ${
                event.age_restrictions
              } must be accompanied by an adult or guardian.`}</li>
            ) : (
              <li>All ages welcome!</li>
            )}
            {/* Youth waiver */}
            {event.youth_waiver_form ? <li /> : <li />}
            {/* Facebook link */}
            {event.facebook_link ? (
              <a href={event.facebook_link} target='_blank'>
                <li>View this event on Facebook</li>
              </a>
            ) : (
              ''
            )}
            {/* Supporters */}
            {event.partners_supporters ? (
              <li>{`Partners/supporters for this event: ${
                event.partners_supporters
              }`}</li>
            ) : (
              ''
            )}
            {/* Sign up */}
            {event.sign_up ? (
              <li>
                Space will be limited!{' '}
                <a href={event.sign_up} target='_blank'>
                  Sign up required
                </a>
              </li>
            ) : (
              ''
            )}
          </ul>
        </div>
      </Layout>
    );
  }
}

export default Event;
