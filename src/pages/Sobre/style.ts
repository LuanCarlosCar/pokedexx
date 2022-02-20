import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  
  }
`;

export const ContainerSobre = styled.main`
  margin-left: 30vw;
  max-width: 70vw;
  padding: 1rem;

  //display: grid;
  //box-sizing: border-box;
  //grid-template-columns: 1fr 1fr 1fr;
  //gap: 10px;
`;

export const TitleDeshboard = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: capitalize;
  text-align: center;
  background: -webkit-linear-gradient(#87cefa, #87cefa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ContainerImg = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ImgDeshboard = styled.img`
  width: 150px;
  color: yellow;
`;

export const Powers = styled.p`
  width: 100%;
  border-radius: 30px;
  border: 3px solid pink;
  text-align: center;
  height: 30px;
  text-transform: capitalize;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: pink;
  }
`;
export const ContainerFlex = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const TitleH = styled.h1`
  text-align: center;
  font-size: 30px;
  margin: 15px 0;
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  margin-top: 40px;
  grid-template-areas:
    "pokemon grafic"
    "pokemon  grafic";
`;

export const ContainerPokemon = styled.div`
  grid-area: pokemon;
`;
export const Grafic = styled.div`
  grid-area: grafic;
`;
