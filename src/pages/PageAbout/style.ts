import styled from "styled-components";

export const ContainerAbout = styled.main`
  margin-left: 30vw;
  max-width: 70vw;
  padding: 1rem;
`;

export const TitleDeshboard = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: capitalize;
  text-align: center;
  color: #87cefa;
`;

export const ContainerImg = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ImgDeshboard = styled.img`
  width: 9.375rem;
`;

export const Powers = styled.p`
  width: 100%;
  border-radius: 1.875rem;
  border: 0.1875rem solid pink;
  text-align: center;
  height: 1.875rem;
  text-transform: capitalize;
  margin-bottom: 0.625rem;
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
  font-size: 1.875rem;
  margin: 0.9375rem 0;
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  margin-top: 2.5rem;
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
