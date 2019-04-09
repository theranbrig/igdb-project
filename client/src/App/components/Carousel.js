/* eslint-disable react/display-name */
import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

const Carousel = ({ pictures }) => {
  // React Slick Slider Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    fade: true,
    appendDots: dots => (
      <div>
        <ul style={{ padding: '20px' }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div style={{ padding: '10px' }}>
        <i className="nes-icon coin is-small" />
      </div>
    ),
    centerMode: true,
  };

  return (
    <div className="nes-container with-title is-dark is-centered is-rounded">
      <p className="title">Screenshots</p>
      <Slider {...settings}>
        {pictures.map(picture => (
          <img
            src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${picture.image_id}.jpg`}
            alt={picture.image_id}
            key={picture.image_id}
          />
        ))}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export default Carousel;
