import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeaderDetails = styled.div`
  font-size: ${props => ((props.appWidth * 47.78) / 1920) * 0.1}em;
  width: 100%;
`;

const DetailsTop = styled.div`
  flex-grow: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  position: relative;
`;

const Description = styled.div`
  font-size: 0.85em;
  color: #a8aabd;
  text-transform: capitalize;
  width: 48%;
`;

const MinMax = styled.div`
  font-size: 0.85em;
  display: flex;
  color: #a8aabd;
  width: 48%;
`;

const Temperature = styled.div`
  width: 100%;
  text-align: center;
  flex-grow: 2;
  span {
    font-size: 4.4em;
    font-weight: bold;
  }
`;

const Details = ({
  description = "Clear",
  temp_max = 2,
  temp_min = 5,
  temp = 3,
  appWidth
}) => {
  return (
    <HeaderDetails appWidth={appWidth}>
      <DetailsTop>
        <Description>{description}</Description>
        <MinMax>{`${temp_max} / ${temp_min}`}</MinMax>
      </DetailsTop>
      <Temperature>
        <span>{temp}</span>
      </Temperature>
    </HeaderDetails>
  );
};

Details.propTypes = {
  description: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  temp_max: PropTypes.string.isRequired,
  temp_min: PropTypes.string.isRequired
};

export default Details;
