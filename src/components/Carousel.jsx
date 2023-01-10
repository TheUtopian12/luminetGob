import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode:true,
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div className="w-28 bg-slate-400">
            <h3>1</h3>
          </div>
          <div className="w-28 bg-slate-400">
            <h3>2</h3>
          </div>
          <div className="w-28 bg-slate-400">
            <h3>3</h3>
          </div>
          <div className="w-28 bg-slate-400">
            <h3>4</h3>
          </div>
          <div className="w-28 bg-slate-400">
            <h3>5</h3>
          </div>
          <div className="w-28 bg-slate-400">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
