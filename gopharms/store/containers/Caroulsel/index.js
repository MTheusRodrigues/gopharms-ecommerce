import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class SimpleSlider extends Component {
  render() {
    return (
      <Carousel showArrows={false} autoPlay infiniteLoop showThumbs={false} width='100%'>
          <div className="card-carousel">
              <img src="/static/banners/1.jpg" />
              <button>Saiba mais</button>
          </div>
          <div className="card-carousel">
              <img src="/static/banners/2.jpg" />
              <button>Saiba mais</button>
          </div>
          <div className="card-carousel">
              <img src="/static/banners/3.jpg" />
              <button>Saiba mais</button>
          </div>
      </Carousel>
  );
  }
}