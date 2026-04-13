import React from 'react';
import NavItem from './NavItem';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function Nav() {
  return (
    <StyledNav>
      <NavItem url="/pop/insert" str="주제 등록" />
      <NavItem url="/pop/list" str="주제 목록" />
      <NavItem url="/pop/detail" str="주제 주인공" />
      <NavItem url="/" str="홈" />
    </StyledNav>
  );
}

export default Nav;
