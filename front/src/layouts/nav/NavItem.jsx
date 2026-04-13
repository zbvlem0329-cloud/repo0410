import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-size: 2em;
  text-decoration: none;
  font-weight: 700;
  background-color: black;
  color: white;
  &:hover {
    background-color: gray;
    cursor: pointer;
  }
`;

function NavItem({ url, str }) {
  return (
    <>
      <StyledLink to={url}>{str}</StyledLink>
    </>
  );
}

export default NavItem;
