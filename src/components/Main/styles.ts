import styled from "styled-components";

export const HourText = styled.h1`
  color: white;
  font-size: 150px;
  text-shadow: #fff 0px 1px 5px;
`;

export const DateText = styled.h1`
  color: white;
  font-size: 25px;
  text-shadow: #fff 0px 1px 1px;
  text-transform: capitalize;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const SvgOnClick = styled.div`
  cursor: pointer;
  margin-top: 20px;
`;

export const WrapperPlaylistIcons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
`;

export const Volume = styled.input`
  -webkit-appearance: none;
  width: 14rem;
  height: 15px;
  margin-top: 5rem;
  border-radius: 10px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 25px;
    background-color: #3E7780;
    border-radius: 7px;
  }
`;
