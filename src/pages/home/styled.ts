import styled from "styled-components";

export const ContainerHomer = styled.main`
  margin-left: 30vw;
  max-width: 70vw;
  padding: 1rem;
`;
export const TitleHome = styled.h1`
  font-size: 20px;
`;
export const ContainerSerch = styled.div`
  grid-column: span 3;
  margin-bottom: 20px;

  input {
    width: 100%;
    height: 50px;
  }
`;

export const ContainerGrid = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

export const ContainerLoading = styled.div`
  width: 50%;
  margin: auto;
`;
