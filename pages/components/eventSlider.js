import React from 'react';
import styles from '../scss/eventSlider.scss';
import Event from './event';
import Slider from 'react-slick';
const ellipsis = require('text-ellipsis');

export default class EventSlider extends React.Component {
  isImage(image) {
    if (image) return image.source_url;
    else return '../../static/images/ws_home_header.svg';
  }
  isDesc(desc) {
    if (desc) return ellipsis(desc.rendered, 100);
    else return 'Sorry, no description available';
  }
  // isLink(link) {
  //   if (link) return link;
  //   else return 'https://www.facebook.com/whalescout';
  // }
  render() {
    // Slick slider config
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1420,
          settings: {
            slidesToShow: 2
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
    return (
      <Slider {...settings} className={styles.event_slider}>
        {this.props.events.map(event => {
          return (
            <Event
              key={event.id}
              date={event.acf.date || 'Coming soon!'}
              title={event.title.rendered || "Helpin' Out Event!"}
              image={this.isImage(event.better_featured_image)}
              description={this.isDesc(event.excerpt)}
              // link={this.isLink(this.acf.facebook_link)}
            />
          );
        })}
      </Slider>
    );
  }
}
