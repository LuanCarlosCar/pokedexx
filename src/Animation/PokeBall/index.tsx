import React from "react";
import {
  BallPoker,
  BallPoker2,
  ContainerBallPoker,
  ContainerPokeBall,
  HigherPoker,
  LowerPoker,
  QuitePoker,
} from "./style";

export default function PokeBall() {
  return (
    <ContainerBallPoker>
      <ContainerPokeBall>
        <HigherPoker></HigherPoker>
        <QuitePoker>kkkkkkkk</QuitePoker>
        <BallPoker>fffffffffffffffffffff</BallPoker>
        <BallPoker2>fffffffffffffffffffff</BallPoker2>
        <LowerPoker></LowerPoker>
      </ContainerPokeBall>
    </ContainerBallPoker>
  );
}
