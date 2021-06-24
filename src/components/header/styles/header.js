import styled from "styled-components/macro";
import { Link as ReactRouterLink, withRouter } from "react-router-dom";
import menuData from "../fixture/header.json";
import { MdViewHeadline } from "react-icons/md";

const Container = styled.header`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid
    ${({ color }) => (color === "white" ? "black" : "white")};
  display: flex;
  justify-content: space-between;
  @media (max-width: 1300px) {
    height: 56px;
  }
  @media (max-width: 1025px) {
    height: 44px;
  }
`;

const MenuWrap = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 770px) {
    display: none;
  }
`;

const MenuText = styled(ReactRouterLink)`
  font-size: 45px;
  color: ${({ color }) => (color === "white" ? "black" : "white")};
  color: ${(props) => props.current === "true" && "#55FFBB"};
  margin: 0px 15px;
  letter-spacing: -2px;
  text-decoration: none;
  line-height: 1.5;
  @media (max-width: 1300px) {
    font-size: 32px;
  }
  @media (max-width: 1025px) {
    font-size: 24px;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-right: 15px;
`;

const LogoText = styled(ReactRouterLink)`
  font-size: 45px;
  font-weight: 600;
  letter-spacing: -2px;
  text-decoration: none;
  line-height: 1.5;
  white-space: nowrap;
  margin: 0px 15px;
  @media (max-width: 1300px) {
    font-size: 32px;
  }
  @media (max-width: 1025px) {
    font-size: 24px;
    line-height: 1.6;
  }
`;
const IconWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  @media (min-width: 769px) {
    display: none;
  }
`;

const MenuIcon = styled(MdViewHeadline)`
  font-size: 30px;
  font-weight: 400;
  color:${({ color }) => (color === "white" ? "black" : "white")}
  cursor: pointer;
  position: absolute;
  top: 6px;
  right: 10px;
`;

const Header = withRouter(
  ({ location: { pathname }, history, match, color }) => {
    return (
      <Container color={color}>
        <MenuWrap>
          {menuData.map((item, index) => (
            <MenuText
              color={color}
              key={index}
              current={pathname.includes(item.tag) ? "true" : "false"}
              to={item.to}
            >
              {item.name}
            </MenuText>
          ))}
        </MenuWrap>
        <LogoWrap>
          <LogoText to="/">시사IN 올해의 사진</LogoText>
        </LogoWrap>
        <IconWrap>
          <MenuIcon color={color}></MenuIcon>
        </IconWrap>
      </Container>
    );
  }
);

export default Header;
