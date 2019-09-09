import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Sun } from "../shared/WeatherIcons";

const TileInner = styled.div`
  font-size: ${props => props.width * 0.002}em;
  min-width: ${props => props.width / 8}px;
  max-width: ${props => props.width / 8}px;
  padding: 0 1.03em;
  text-align: center;
  color: #fff;
  background: none;
  -webkit-appearance: none;
  border: none;
  border-radius: 6px;
  background-color: ${props =>
    props.active ? "rgba(255, 255, 255, 0.091)" : "rgba(255, 255, 255, 0)"};
  transition: background-color 0.5s;
  cursor: pointer;
  &:hover {
    background-color: ${props =>
      props.active
        ? "rgba(255, 255, 255, 0.091)"
        : "rgba(255, 255, 255, 0.021)"};
  }
`;

const Hour = styled.p`
  margin: 0;
  /* font-size: ${props => props.width * 0.002}em; */
  font-size: 1.05em;
  color: #a8aabd;
  padding: 0.75em 0;
`;

const Ico = styled.div`
  svg {
    max-width: 120px;
  }
`;

const Temp = styled.p`
  margin: 0;
  font-size: 1.82em;
  font-weight: 600;
  padding: 0.4em 0;
`;

const Tile = ({
  hour,
  temp,
  active,
  onClick,
  id,
  width,
  scrollToHour,
  scrollOnClick
}) => {
  const TileRef = React.createRef();

  useEffect(() => {
    const scrollOnMount = () => {
      if (TileRef.current && active && scrollOnClick) {
        scrollToHour(TileRef.current.offsetLeft);
      }
    };
    scrollOnMount();
  });

  return (
    <TileInner
      width={width}
      onClick={() => onClick()}
      ref={active ? TileRef : null}
      active={active}
    >
      <Hour>{hour}</Hour>
      <Ico>
        <Sun />
      </Ico>
      <Temp>{temp}</Temp>
    </TileInner>
  );
};

Tile.propTypes = {
  hour: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  scrollToHour: PropTypes.func.isRequired
};

export default Tile;
