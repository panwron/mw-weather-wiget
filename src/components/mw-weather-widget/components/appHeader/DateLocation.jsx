import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Section = styled.div`
  width: 35%;
  font-size: ${props => ((props.appWidth * 47.78) / 1920) * 0.1}em;
`;

const City = styled.p`
  font-size: 0.85em;
  margin: 0;
  color: #a8aabd;
`;

const Day = styled.div`
  font-size: 1.77em;
  margin: 0.2em 0;
  font-weight: bold;
`;

const Date = styled.div`
  font-size: 1.77em;
  margin: 0.2em 0;
  font-weight: bold;
`;

const DateLocation = ({ city, formatedDate, day, appWidth }) => {
  return (
    <Section appWidth={appWidth}>
      <City>{city}</City>
      <Day>{day}</Day>
      <Date>{formatedDate}</Date>
    </Section>
  );
};

DateLocation.propTypes = {
  city: PropTypes.string.isRequired,
  formatedDate: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired
};

export default DateLocation;

//TODO: - investigate bug:  "Date is not a constructor", can't use const d = new Date() anywhere in this component ???
