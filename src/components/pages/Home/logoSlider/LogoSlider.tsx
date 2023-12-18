import React from "react";
import Slider from "react-infinite-logo-slider";

function LogoSlider() {
  return (
    <div className=" overflow-hidden">
      <h2 className="text-center font-extrabold text-4xl">Our partners</h2>
      <div className="mt-7">
        <Slider
          width="250px"
          duration={40}
          // pauseOnHover={true}
          blurBorders={false}
          blurBoderColor={"#fff"}
        >
          <Slider.Slide>
            <div className="	box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);">
              <img
                src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
                alt="any"
                className="w-36"
              />
            </div>
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Yahoo%21_icon_%282009-2013%29.svg/1200px-Yahoo%21_icon_%282009-2013%29.svg.png"
              alt="any2"
              className="w-36"
            />
          </Slider.Slide>
        
        </Slider>
      </div>
    </div>
  );
}

export default LogoSlider;
