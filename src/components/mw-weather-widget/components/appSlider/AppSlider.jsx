import React, { useEffect } from "react";
import styled from "styled-components";
import SliderTile from "./SliderTile";

const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  min-height: ${props => props.height - 20}px;
  max-height: ${props => props.height - 20}px;

  > div {
    display: flex;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    box-sizing: content-box;
    padding-bottom: 30px;
  }
`;

const AppSlider = ({ weatherByHour, scrollOnClick }) => {
  const [sliderWidth, setSliderWidth] = React.useState(0);
  const [sliderHeight, setSliderHeight] = React.useState(0);

  const SliderRef = React.useRef();
  useEffect(() => {
    setSliderWidth(SliderRef.current.offsetWidth);
    setSliderHeight(SliderRef.current.offsetHeight);
    const handleResize = () => {
      let resizeTimer;

      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setSliderWidth(SliderRef.current.offsetWidth);
        setSliderHeight(SliderRef.current.offsetHeight);
      }, 400);
    };
    window.addEventListener("resize", handleResize, true);
    return () => {
      window.removeEventListener("resize", handleResize, true);
    };
  }, [setSliderWidth, sliderHeight]);

  const scrollToHour = activeTileOffset => {
    const sliderPosition =
      SliderRef.current.offsetWidth / 3 + SliderRef.current.offsetLeft;

    SliderRef.current.scroll(activeTileOffset - sliderPosition, 0);
  };

  return (
    <SliderWrapper height={sliderHeight}>
      <div ref={SliderRef}>
        {weatherByHour.map((hour, i) => (
          <SliderTile
            sliderWidth={sliderWidth}
            key={i}
            scrollToHour={scrollToHour}
            scrollOnClick={scrollOnClick}
            {...hour}
          />
        ))}
      </div>
    </SliderWrapper>
  );
};

export default AppSlider;
