import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import iconArrows from "./icon-arrows.svg";
import iconCalendar from "./icon-calendar.svg";
import iconArrowDown from "./icon-arrow-down.svg";
import iconJet from "./icon-jet.svg";

const Header = styled.header`
  padding: 12px 6px 88px;
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
`;

const Logo = styled.img`
  margin-bottom: 47px;
`;

const Description = styled.div`
  margin-bottom: 16px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-align: center;

  color: #ffffff;
`;

const FormContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 16px;

  border-radius: 4px;
  overflow: hidden;
`;

const BaseTextInput = styled.input`
  margin-bottom: 2px;
  padding: 18px 16px;
  width: 100%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;

  color: #4a4a4a;
  border: 0;
`;

const BaseDateInput = BaseTextInput.extend`
  padding: 18px 36px 18px 16px;
  width: calc(50% - 1px);

  background-image: url(${iconCalendar});
  background-repeat: no-repeat;
  background-position: top 50% right 16px;
`;

const FromCity = BaseTextInput.extend`
  flex-grow: 1;
  padding-right: 11px;
  width: auto;
`;

const CityAbbr = styled.span`
  margin-bottom: 2px;
  padding: 18px 6px 18px 5px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;

  color: #a0b0b9;
  background: #fff;
`;

const SwapCities = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2px;
  padding: 0 16px 0 5px;

  border: 0;
  background-color: #fff;
`;

const ToCity = BaseTextInput.extend``;
const DepartureDate = BaseDateInput.extend``;
const ArrivalDate = BaseDateInput.extend``;
const SelectPeopleCountAndTicketType = styled.div`
  padding: 18px 16px;
  width: 100%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;

  color: #4a4a4a;
  background-color: #fff;
  background-image: url(${iconArrowDown});
  background-repeat: no-repeat;
  background-position: top 50% right 16px;
`;

const TicketType = styled.span`
  color: #a0b0b9;
`;

const IconJet = styled.img`
  margin-left: 16px;
`;

const Submit = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 14px 0 13px;
  width: 100%;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 24px;

  color: #ffffff;
  background: #ff9241;
  border: 0;
  border-radius: 4px;
`;

export default () => (
  <Header>
    <Logo src={logo} alt="aviasales logo" />
    <Description>Поиск дешевых авиабилетов</Description>
    <form>
      <FormContentWrapper>
        <FromCity value="Москва" data-abbr="mow" />
        <CityAbbr>MOW</CityAbbr>
        <SwapCities>
          <img
            src={iconArrows}
            alt="swap departure and arrival sities"
            width="16px"
          />
        </SwapCities>
        <ToCity placeholder="Город прибытия" />
        <DepartureDate placeholder="Туда" />
        <ArrivalDate placeholder="Обратно" />
        <SelectPeopleCountAndTicketType>
          1 пассажир, <TicketType>эконом</TicketType>
        </SelectPeopleCountAndTicketType>
      </FormContentWrapper>
      <Submit type="submit">
        Найти билеты <IconJet src={iconJet} />
      </Submit>
    </form>
  </Header>
);
