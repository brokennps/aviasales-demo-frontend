import React from "react";
import styled from "styled-components";

const Card = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
  }

  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  overflow: hidden;
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 16px 12px;
`;

const City = styled.div`
  margin-bottom: 4px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;

  color: #5b5b5c;
`;

const Country = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;

  color: #a0b0b9;
`;

const Price = styled.div`
  margin-bottom: 4px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 14px;
  text-align: right;

  color: #00bae8;
`;
const CurrentDate = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  text-align: right;

  color: #a0b0b9;
`;

export default ({ imgSrc, imgAlt, city, country, fromPrice, fromDate }) => (
  <Card>
    <img src={imgSrc} alt={imgAlt} />
    <Description>
      <div>
        <City>{city}</City>
        <Country>{country}</Country>
      </div>
      <div>
        <Price>Найти от {fromPrice} ₽</Price>
        <CurrentDate>{fromDate}</CurrentDate>
      </div>
    </Description>
  </Card>
);
