import React, { useState } from "react";
import styled, { keyframes } from "styled-components/macro";
import { Link as ReactRouterLink, withRouter } from "react-router-dom";
import menuData from "../fixture/sub-menu.json";
import { MdNavigation } from "react-icons/md";
import { Motion, spring } from "react-motion";

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

const FirstSelect = styled.div`
  width: 25%;
  justify-content: space-between;
`;
const MenuSelect = styled.div`
  width: 25%;
  border-left: 1px solid
    ${({ color }) => (color === "white" ? "black" : "white")};
  justify-content: space-between;
`;
const MainText = styled.span`
  font-size: 45px;
  color: ${({ color }) => (color === "white" ? "black" : "white")};

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

const rotateUp = keyframes`
  from{
      transform:rotate(180deg);
  }
  to{
      transform:rotate(0deg);
  }
`;

const rotateDown = keyframes`
  from{
      transform:rotate(0deg);
  }
  to{
    transform:rotate(180deg);
  }
`;

const SelectIcon = styled(MdNavigation)`
  color: white;
  position: relative;
  font-size: 30px;
  right: 10px;
  top: 18px;
  animation: ${({ rotate }) => (rotate ? rotateDown : rotateUp)} 0.5s forwards;
`;
const SearchArea = styled.span`
  color: #333;
  font-size: 45px;
  margin: 0px 15px;
  letter-spacing: -2px;
  text-decoration: none;
  line-height: 1.4;
  @media (max-width: 1300px) {
    font-size: 32px;
  }
  @media (max-width: 1025px) {
    font-size: 24px;
  }
`;
const SelectMenuWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const SubMenuWrap = styled.div`
  position: relative;
  top: 2px;
  background-color: ${({ color }) => (color === "white" ? "white" : "black")};
  width: 100%;
  display: inline-block;
  overflow: hidden;
  &.closed {
    max-height: 0;
    border: none;
    transition: all 0.5s cubic-bezier(0.5, 0, 0.1, 1);
  }
  &.open {
    max-height: 1200px;
    border: 1px solid ${({ color }) => (color === "white" ? "black" : "white")};
    transition: all 0.5s cubic-bezier(0.5, 0, 0.1, 1);
  }
`;

const SelectSubMenu = styled.span`
  width: 100%;
  display: block;
  font-size: 24px;
  border-bottom: 1px solid
    ${({ color }) => (color === "white" ? "black" : "white")};
  padding: 0.3em 16px;
  cursor: pointer;
  height: ${({ height }) => (height === 0 ? 0 : "auto")};
`;

const SubHeader = withRouter(
  ({ location: { pathname }, history, match, color, onChange }) => {
    if (
      match.url.split("/")[1] === "photo" ||
      match.url.split("/")[1] === "person"
    ) {
      const datas = menuData.find(
        (data) => data.name === match.url.split("/")[1]
      );

      return (
        <Container color={color}>
          <MenuWrap>
            {datas.info.map((item, index) => (
              <MenuText
                color={color}
                key={index}
                current={pathname === item.to ? "true" : "false"}
                to={item.to}
              >
                {item.years}
              </MenuText>
            ))}
          </MenuWrap>
        </Container>
      );
    } else {
      const datas = menuData.find(
        (data) => data.name === match.url.split("/")[1]
      );
      const years = datas.years;
      const photographers = datas.photographer;
      const authors = datas.author;
      const [rotate, setRotate] = useState([true, true, true]);
      const [subject, setSubject] = useState(["연도", "사진가", "작가"]);
      const [open, setOpen] = useState([false, false, false]);
      return (
        <Container color={color}>
          <MenuWrap>
            <FirstSelect color={color}>
              <SelectMenuWrap
                color={color}
                onClick={() => {
                  open[0]
                    ? setOpen([false, false, false])
                    : setOpen([true, false, false]);

                  const tem = rotate;
                  tem[0] = !rotate[0];
                  setRotate([...tem]);
                }}
              >
                <MainText color={color}>{subject[0]}</MainText>
                <SelectIcon rotate={rotate[0]} color={color}></SelectIcon>
              </SelectMenuWrap>

              <SubMenuWrap
                color={color}
                open={open[0]}
                className={open[0] ? "open" : "closed"}
              >
                {years.map((item, index) => (
                  <SelectSubMenu color={color} key={index}>
                    {item.value}
                  </SelectSubMenu>
                ))}
              </SubMenuWrap>
            </FirstSelect>
            <MenuSelect color={color}>
              <SelectMenuWrap
                color={color}
                onClick={() => {
                  open[1]
                    ? setOpen([false, false, false])
                    : setOpen([false, true, false]);

                  const tem = rotate;
                  tem[1] = !rotate[1];
                  setRotate([...tem]);
                }}
              >
                <MainText color={color}>{subject[1]}</MainText>
                <SelectIcon color={color} rotate={rotate[1]}></SelectIcon>
              </SelectMenuWrap>
              <SubMenuWrap
                color={color}
                open={open[1]}
                className={open[1] ? "open" : "closed"}
              >
                {photographers.map((item, index) => (
                  <SelectSubMenu color={color} key={index}>
                    {item.value}
                  </SelectSubMenu>
                ))}
              </SubMenuWrap>
            </MenuSelect>
            <MenuSelect color={color}>
              <SelectMenuWrap
                color={color}
                onClick={() => {
                  open[2]
                    ? setOpen([false, false, false])
                    : setOpen([false, false, true]);
                  const tem = rotate;
                  tem[2] = !rotate[2];
                  setRotate([...tem]);
                }}
              >
                <MainText color={color}>{subject[2]}</MainText>
                <SelectIcon color={color} rotate={rotate[2]}></SelectIcon>
              </SelectMenuWrap>
              <SubMenuWrap
                color={color}
                open={open[2]}
                className={open[2] ? "open" : "closed"}
              >
                {authors.map((item, index) => (
                  <SelectSubMenu color={color} key={index}>
                    {item.value}
                  </SelectSubMenu>
                ))}
              </SubMenuWrap>
            </MenuSelect>
            <MenuSelect color={color}>
              <SearchArea>Search</SearchArea>
            </MenuSelect>
          </MenuWrap>
        </Container>
      );
    }
  }
);

export default SubHeader;
