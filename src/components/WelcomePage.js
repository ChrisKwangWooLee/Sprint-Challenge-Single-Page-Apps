import React from "react";
import styled from 'styled-components';

export default function WelcomePage() {

  const Header = styled.header`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img style={{width: "400px"}}
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
          />
      </Header>
    </section>
  );
}
