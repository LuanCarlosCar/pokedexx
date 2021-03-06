import Avatar from "../../assets/img/avatar.jpg";
import {
  ContainerAvatar,
  ContainerHeader,
  ContainerNav,
  LinkPage,
} from "./styled";
import React from "react";

export default function Header() {
  return (
    <ContainerHeader>
      <ContainerAvatar>
        <h1>Pokedex</h1>
        <img src={Avatar} />
        <p>Luan Carlos</p>
        <p>Contagem-MG</p>
      </ContainerAvatar>

      <ContainerNav>
        <ul>
          <li>
            <LinkPage to="/">My Pokemons</LinkPage>
          </li>
          <li>
            <LinkPage to="/detail">PokeDetail</LinkPage>
          </li>
          <li>
            <LinkPage to="/">Creating</LinkPage>
          </li>
        </ul>
      </ContainerNav>
    </ContainerHeader>
  );
}
