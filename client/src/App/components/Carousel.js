import React from 'react';
import Slider from 'react-slick';

const Carousel = props => {
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
				<i class="nes-icon coin is-small" />
			</div>
		),
		centerMode: true
	};

	return (
		<div className="nes-container with-title is-dark is-centered is-rounded">
			<p class="title">Screenshots</p>
			<Slider {...settings}>
				{props.pictures.map(picture => (
					<img
						src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${
							picture.image_id
						}.jpg`}
					/>
				))}
			</Slider>
		</div>
	);
};

export default Carousel;
