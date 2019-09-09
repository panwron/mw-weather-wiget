import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeaderDetails = styled.div`
  width: 30%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Description = styled.div`
  font-size: 0.8em;
  color: #ccc;
  text-transform: capitalize;
`;

const MinMax = styled.div`
  font-size: 0.8em;
  color: #ccc;
`;

const Temperature = styled.div`
  width: 100%;
  font-size: 4em;
  padding: 0 0.1em;
`;

const Details = ({
  description = "Clear",
  temp_max = 2,
  temp_min = 5,
  temp = 3
}) => {
  return (
    <HeaderDetails>
      <Description>{description}</Description>
      <MinMax>{`${temp_max} / ${temp_min}`}</MinMax>
      <Temperature>{temp}</Temperature>
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
