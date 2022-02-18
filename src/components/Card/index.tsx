import {
  PokeImage,
  ContainerCard,
  TextTitle,
  TextName,
  StyleContainer,
  LinkCard,
} from "./style";
import React, { useState, useEffect } from "react";
import { PokeInfo, Typeloading } from "./type";
import PreLoaderCard from "./components/PreLoaderCard";
import { increment } from "store/Stock/Stock.actions";
import { useDispatch } from "react-redux";
import { adjustHue, desaturate, lighten, shade } from "polished";

export default function Card(props) {
  const { pokeName } = props;
  const [pokeImg, setPokeimg] = useState<PokeInfo>();
  const [pokeColor, setPokeColor] = useState<any>();
  const [loading, setLoadiang] = useState<Typeloading>({ loading: true });
  const dispatch = useDispatch();

  const imprimirPokemons = async () => {
    if (!pokeName) return;
    setLoadiang({ ...loading, loading: true });
    const api = await fetch(` https://pokeapi.co/api/v2/pokemon/${pokeName}`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
      },
    });

    const data = await api.json();
    setPokeimg(data);
    setLoadiang({ ...loading, loading: false });
  };

  const imprimirColor = async () => {
    if (!pokeImg) return;
    const api = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokeImg.id}/`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-type": "application/json",
        },
      }
    );
    const data = await api.json();
    setPokeColor(data);
    console.log(pokeColor.color);
  };

  useEffect(() => {
    imprimirPokemons();
  }, []);

  useEffect(() => {
    imprimirColor();
  }, [pokeImg]);

  function renderComponentLoad() {
    if (loading?.loading) {
      return <PreLoaderCard />;
    }

    return (
      <StyleContainer
        onClick={() => dispatch(increment({ name: pokeName, id: pokeImg?.id }))}
      >
        <LinkCard to="/sobre">
          <PokeImage src={pokeImg?.sprites.other?.home?.front_default} />
          <TextTitle>{pokeName}</TextTitle>
          <TextName>#{pokeImg?.order}</TextName>
        </LinkCard>
      </StyleContainer>
    );
  }
  function renderColor() {
    if (!pokeColor?.color.name) return "red";
    return lighten(0.2, pokeColor?.color.name);
  }

  return (
    <ContainerCard fundo={renderColor()}>{renderComponentLoad()}</ContainerCard>
  );
}
