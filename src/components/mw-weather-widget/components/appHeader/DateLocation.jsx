import React from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 30%;
`;

const City = styled.p`
  font-size: 0.8em;
  margin: 0;
  color: #ccc;
`;

const Day = styled.div`
  font-size: 2.5em;
  margin: 0.2em 0;
`;

const Date = styled.div`
  font-size: 2.5em;
  margin: 0.2em 0;
`;

const DateLocation = ({ city, formatedDate, day }) => {
  return (
    <Section>
      <City>{city}</City>
      <Day>{day}</Day>
      <Date>{formatedDate}</Date>
    </Section>
  );
};

export default DateLocation;

//TODO: - investigate bug:  "Date is not a constructor", can't use const d = new Date() anywhere in this component ???
