import styled from "styled-components";

export const ContainerHomer = styled.main`
  margin-left: 30vw;
  max-width: 70vw;
  padding: 1rem;
  #sentinel {
    font-family: "Inter", sans-serif;
    font-size: 1.25rem;
    text-align: center;
    margin-top: 10px;
  }
`;

export const TitleHome = styled.h1`
  font-size: 1.25rem;
`;

export const ContainerSerch = styled.div`
  grid-column: span 3;
  margin-bottom: 1.25rem;

  input {
    width: 100%;
    height: 3.125rem;
  }
`;

export const ContainerGrid = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.625rem;
`;

export const ContainerLoading = styled.div`
  width: 50%;
  margin: auto;
`;
