import Layout from './components/layout';
import fetch from 'isomorphic-unfetch';
import React from 'react';
import styles from './scss/app.scss';
import ReactHtmlParser from 'react-html-parser';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: {}, acf: {}  };
  }
  componentDidMount() {
    fetch(
      `https://admin.whalescout.org/wp-json/wp/v2/posts?slug=${
        this.props.url.query.slug
      }`
    )
      .then(res => res.json())
      .then(event => this.setState({ 
        body: event[0].content.rendered.replace(/\n\n\n\n/g, '<br>'), 
        acf: event[0].acf 
      }));
  }
  render() {
    const event = this.state;
    // Below are event details with defaults available when no information is provided
    return (
      <Layout>
        <div className={styles.event_content}>
          {/* Title */}
          {event.acf.title ? <h1>{event.acf.title}</h1> : <h1>Helpin' Out Event!</h1>}
          {/* Location */}
          {event.acf.location_name ? <h2>{`@ ${event.acf.location_name}`}</h2> : ''}
          {/* Description */}
          <div className={styles.event_content}>
              {ReactHtmlParser(event.body)}
          </div>
          {/* Image */}
          {event.acf.image ? (
            <img src={event.acf.image} />
          ) : (
            <img src='./static/images/ws_home_header.svg' />
          )}
          {/* Image caption */}
          {event.acf.image_caption ? (
            <p className={styles.event_caption}>{event.acf.image_caption}</p>
          ) : (
            ''
          )}
          <h3>Event Details:</h3>
          <ul>
            {/* Date */}
            {event.acf.date ? <li>{`Date: ${event.acf.date}`}</li> : ''}
            {/* Time */}
            {event.acf.start_time ? (
              <li>
                {`Time: ${event.acf.start_time}`}
                {event.acf.end_time ? <span>{` - ${event.acf.end_time}`}</span> : ''}
              </li>
            ) : (
              'Check back for details!'
            )}

            {/* Address */}
            {event.acf.location_name ? (
              <li>
                {`Location: ${event.acf.location_name}`}
                {event.acf.location_address ? (
                  <span>{`, ${event.acf.location_address}`}</span>
                ) : (
                  ''
                )}
              </li>
            ) : (
              'Check back for details!'
            )}
            {/* What to bring */}
            {event.acf.what_to_bring ? (
              <li>{`What to bring: ${event.acf.what_to_bring}`}</li>
            ) : (
              ''
            )}
            {/* Provided */}
            {event.acf.provided ? <li>{`Provided: ${event.acf.provided}`}</li> : ''}
            {/* Age rescrictions */}
            {event.acf.age_restrictions > 0 ? (
              <li>{`Youth under the age of ${
                event.acf.age_restrictions
              } must be accompanied by an adult or guardian.`}</li>
            ) : (
              <li>All ages welcome!</li>
            )}
            {/* Youth waiver */}
            {event.acf.youth_waiver_form ? <li /> : <li />}
            {/* Facebook link */}
            {event.acf.facebook_link ? (
              <a href={event.acf.facebook_link} target='_blank'>
                <li>View this event on Facebook</li>
              </a>
            ) : (
              ''
            )}
            {/* Supporters */}
            {event.acf.partners_supporters ? (
              <li>{`Partners/supporters for this event: ${
                event.acf.partners_supporters
              }`}</li>
            ) : (
              ''
            )}
            {/* Sign up */}
            {event.acf.sign_up ? (
              <li>
                Space will be limited!{' '}
                <a href={event.acf.sign_up} target='_blank'>
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
