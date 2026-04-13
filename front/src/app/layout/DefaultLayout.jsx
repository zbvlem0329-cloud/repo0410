import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './../../layouts/header/Header';
import Nav from './../../layouts/nav/Nav';
import Footer from './../../layouts/footer/Footer';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr 7fr 1fr;
  grid-template-columns: 1fr;
  place-items: center center;

  & > header,
  & > nav,
  & > main,
  & > footer {
    width: 100%;
    height: 100%;
  }
`;

function DefaultLayout() {
  return (
    <Wrapper>
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Wrapper>
  );
}

export default DefaultLayout;
