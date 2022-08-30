import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  left: 28%;
  bottom: 50vh;
  position: absolute;
  display: flex;
  width: 50%;
  height: 40vh;
  align-items: center;
  justify-content: center;
`;
export const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 15px;
  height: 100%;
  margin-top: 5%;
  margin-bottom: 15%;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  flex-direction: column;
  width: 45%;
  height: 80%;
  top: 40%;
  right: 50%;
`;

export const H2 = styled.h2`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 20px;
  padding: 2%;
`;

export const Div = styled.div`
  position: absolute;
  width: 10%;
  top: 120%;
  right: 85%;
`;

export const Ul = styled.ul`
  font-size: 20px;
  width: 400%;
  margin-top: 125%;
`;

export const H3 = styled.h3`

  width: 100%;
height:220%;
margin-left:100%
    font-size: 20px;
`;

export const Box = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 30%;
  height: 100%;
  margin-left: 40%;
  top: 50%;
`;

export const P = styled.p``;
