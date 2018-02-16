import React from "react";
import styled from "styled-components";
import Card from "./Card";
import logo from "./icon-logo.svg";
import iconGlobe from "./icon-globe.svg";
import iconPalm from "./icon-palm.svg";
import iconCart from "./icon-cart.svg";
import iconHistory from "./icon-history.svg";
import iconBar from "./icon-bar.svg";
import iconChildren from "./icon-children.svg";
import kranodarPhoto from "./krasnodar-photo.png";
import sochiPhoto from "./sochi-photo.png";
import saintPetersburgPhoto from "./saint-petersburg-photo.png";
import mineralnyeVodyPhoto from "./mineralnye-vody-photo.png";
import simferopolPhoto from "./simferopol-photo.png";
import barcelonaPhoto from "./barcelona-photo.png";

const mockDestinationsByCategory = [
  {
    logoSrc: iconGlobe,
    text: "куда угодно",
    id: "1"
  },
  {
    logoSrc: iconPalm,
    text: "cолнце и море",
    id: "2"
  },
  {
    logoSrc: iconCart,
    text: "шопинг, город",
    id: "3"
  },
  {
    logoSrc: iconHistory,
    text: "культура и история",
    id: "4"
  },
  {
    logoSrc: iconBar,
    text: "ночная жизнь",
    id: "5"
  },
  {
    logoSrc: iconChildren,
    text: "отдых с детьми",
    id: "6"
  }
];

const mockDestinationsByCity = [
  {
    imgSrc: kranodarPhoto,
    imgAlt: "фотография города Краснодар",
    city: "Краснодар",
    country: "РОССИЯ",
    fromPrice: "1 212",
    fromDate: "18 марта",
    key: "1"
  },
  {
    imgSrc: sochiPhoto,
    imgAlt: "фотография города Сочи (Адлер)",
    city: "Сочи (Адлер)",
    country: "РОССИЯ",
    fromPrice: "1 334",
    fromDate: "27 марта",
    key: "2"
  },
  {
    imgSrc: saintPetersburgPhoto,
    imgAlt: "фотография города Санкт-Петербург",
    city: "Санкт-Петербург",
    country: "РОССИЯ",
    fromPrice: "1 508",
    fromDate: "19 февраля",
    key: "3"
  },
  {
    imgSrc: mineralnyeVodyPhoto,
    imgAlt: "фотография города Минеральные Воды",
    city: "Минеральные Воды",
    country: "РОССИЯ",
    fromPrice: "2 074",
    fromDate: "13 марта",
    key: "4"
  },
  {
    imgSrc: simferopolPhoto,
    imgAlt: "фотография города Симферополь",
    city: "Симферополь (Кр…",
    country: "КРЫМ",
    fromPrice: "2 407",
    fromDate: "13 марта",
    key: "5"
  },
  {
    imgSrc: barcelonaPhoto,
    imgAlt: "фотография города Барселона",
    city: "Барселона",
    country: "ИСПАНИЯ",
    fromPrice: "4 247",
    fromDate: "24 марта",
    key: "6"
  }
];

const Destinations = styled.div`
  padding: 128px 6px 0;

  background-color: #f8fcff;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: top 40px left 50%;
`;

const Title = styled.div`
  margin-bottom: 32px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  font-size: 24px;
  text-align: center;

  color: #4a4a4a;
`;

const CurrentCity = styled.span`
  color: #00ace2;
`;

const CategoryNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: 0 -8px 40px;
`;

const Category = styled.div`
  flex-basis: 33.3333%;
  margin-bottom: 21px;
  padding: 0 16px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;

  color: #00ace2;
`;

const CircleWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  vertical-align: top;
  margin-bottom: 12px;
  width: 48px;
  height: 48px;

  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.12);
  border-radius: 50px;
`;

export default () => (
  <Destinations>
    <Title>
      Популярные направления перелетов из города{" "}
      <CurrentCity>Москва</CurrentCity>
    </Title>
    <CategoryNav>
      {mockDestinationsByCategory.map(({ logoSrc, text, id }) => (
        <Category key={id}>
          <CircleWrapper>
            <img src={logoSrc} alt="" />
          </CircleWrapper>
          <div>{text}</div>
        </Category>
      ))}
    </CategoryNav>
    {mockDestinationsByCity.map(content => <Card {...content} />)}
  </Destinations>
);
