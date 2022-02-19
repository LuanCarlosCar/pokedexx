import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  
  }
`;

export const ContainerBallPoker = styled.div`
  width: 40%;
  height: 50%;
  margin-top: 200px;
  margin: auto;
`;

export const ContainerPokeBall = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 200px;
  position: relative;
  background-color: yellow;
  transition: 0ms.3s;
  z-index: 200;
  transform: translateY(0);
  cursor: pointer;
  animation: ${rotate} 2s infinite;
`;
export const HigherPoker = styled.div`
  width: 300px;
  height: 150px;
  background-color: #3ea1db;
  position: absolute;
  top: 0;
  border-radius: 250px 250px 0 0;
  box-sizing: border-box;
  border: 1px solid black;
`;

export const QuitePoker = styled.div`
  width: 100%;
  height: 16px;
  position: absolute;
  z-index: 99;
  background-color: black;
  color: transparent;
  bottom: 50%;
`;

export const BallPoker = styled.div`
  position: absolute;
  height: 55px;
  left: 40.95%;
  max-width: 55px;
  bottom: 42.545%;
  border-radius: 200px;
  z-index: 100;
  background-color: black;
  color: transparent;
`;

export const BallPoker2 = styled.div`
  position: absolute;
  height: 35px;
  left: 44.3%;
  max-width: 35px;
  bottom: 46%;
  border-radius: 200px;
  z-index: 100;
  background-color: white;
  color: transparent;
`;

export const LowerPoker = styled.div`
  width: 300px;
  height: 150px;
  position: absolute;
  bottom: 0;
  background-color: white;
  border-radius: 0 0 300px 300px;
  box-sizing: border-box;
  border: 1px solid black;
`;
