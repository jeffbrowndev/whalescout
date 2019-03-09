import React from "react";
import styles from "../scss/app.scss";
import Event from "./event";
import Slider from "react-slick";

class EventSlider extends React.Component {
  constructor(props) {
    super(props);
  }
  getSlidesLarge() {
    // Only show 3 slides max on large desktops
    const events = this.props.events;
    if (events !== undefined) {
      if (events.length <= 3 && events.length > 0) return events.length;
      else if (events.length === 0) return 1;
      else return 3;
    }
  }
  getSlidesSmall() {
    // Only show 2 slides max on small desktops, 1 slide on anything smaller
    const events = this.props.events;
    if (events !== undefined) {
      if (events.length >= 2) return 2;
      else return 1;
    }
  }
  render() {
    // Slick slider config
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: this.getSlidesLarge(),
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1420,
          settings: {
            slidesToShow: this.getSlidesSmall()
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
    };
    if (this.props.events !== undefined) {
      return (
        <div className={styles.event_slider_wrapper}>
          <Slider {...settings} className={styles.event_slider}>
            {this.props.events.map(event => {
              return (
                <Event
                  key={event.id}
                  slug={event.slug}
                  title={event.acf.title}
                  date={event.acf.date}
                  description={event.acf.description}
                  // Use default image if no image is provided
                  image={
                    event.acf.image || "./static/images/ws_home_header.svg"
                  }
                />
              );
            })}
          </Slider>
        </div>
      );
    } else {
      // If no events scheduled, return this message
      return (
        <div className={styles.event_slider_wrapper}>
          <Slider {...settings} className={styles.event_slider}>
            <h1>
              No events are currently&nbsp;scheduled. <br />
              Please check back&nbsp;later!
            </h1>
          </Slider>
        </div>
      );
    }
  }
}

export default EventSlider;
