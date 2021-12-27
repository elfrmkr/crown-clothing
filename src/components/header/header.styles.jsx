import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  -webkit-box-shadow: 0 4px 6px -6px #333333;
  -moz-box-shadow: 0 4px 6px -6px #333333;
  box-shadow: 0 7px 5px -6px #333333;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;
export const Footer = styled.div`
  clear: both;
  position: relative;
  height: 100px;
  margin-bottom: 10px;
  background-color: #4285f4;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: inline-block;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;
export const Title = styled(Link)`
  font-family: "Cookie", cursive;
  font-weight: 300px;
  white-space: nowrap;
  display: relative;
  justify-content: flex-start;
  font-size: 40px;
  margin-top: 15px;
  align-items: center;

  display: inline-block;
  @media screen and (max-width: 800px) {
    font-size: 30px;
  }

  @media screen and (max-width: 500px) {
    font-size: 28px;
  }
  @media screen and (max-width: 400px) {
    font-size: 24px;
  }
`;
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  color: blue;
  font-size: 20px;
  white-space: nowrap;
  font-weight: 200px;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
  @media screen and (max-width: 500px) {
    width: 50%;
  }
  @media screen and (max-width: 400px) {
    width: 40%;
  }
`;

// share styles duplicated
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  justify-content: center;
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-family: "Raleway", sans-serif;
  &:hover {
    border-radius: 20px;
    background: #99a4aaaa;
  }

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }

  @media screen and (max-width: 450px) {
    font-size: 12px;
    width: 40%;
  }

  @media screen and (max-width: 420px) {
    font-size: 10px;
    width: 48%;
  }
`;
export const Logostyle = styled(Link)`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;
