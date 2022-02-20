import ButtonExit from "components/ButtonExit";
import { Typeloading } from "components/Card/type";
import GraficTooltip from "components/GraficTooltip";
import TextDescription from "components/TextDescription";
import { TypeDescription } from "components/TextDescription/type";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import CardDescription from "./components/CardDescription";
import PreLoaderSobre from "./components/PreLoaderSobre";
import {
  ContainerImg,
  ContainerAbout,
  ImgDeshboard,
  TitleDeshboard,
  ContainerFlex,
  TitleH,
  ContainerPokemon,
} from "./style";
import { PokeInfoDashboard, PokeProps } from "./type";

export default function PageAbout() {
  const [loading, setLoadiang] = useState<Typeloading>({ loading: true });
  const stock = useSelector<RootState>((state) => state.stock);
  const [pokeProps, setPokeProps] = useState<PokeProps | any>();
  const [pokeDetail, setPokeDetail] = useState<PokeInfoDashboard>();
  const [description, setDescription] = useState<TypeDescription>();

  const printPokemons = async () => {
    if (!pokeProps) return;
    setLoadiang({ ...loading, loading: true });
    const api = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeProps?.name}`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-type": "application/json",
        },
      }
    );
    const data = await api.json();
    setPokeDetail(data);
    const api2 = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokeProps.id}`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-type": "application/json",
        },
      }
    );
    const data2 = await api2.json();
    setDescription(data2);

    setLoadiang({ ...loading, loading: false });
  };

  useEffect(() => {
    setPokeProps(stock);
  }, []);

  useEffect(() => {
    printPokemons();
  }, [pokeProps]);

  function renderComponent() {
    if (loading?.loading) {
      return <PreLoaderSobre />;
    }

    return (
      <ContainerAbout>
        <ButtonExit />
        <ContainerPokemon>
          <ContainerImg>
            <ImgDeshboard
              src={pokeDetail?.sprites.other?.home?.front_default}
            />
            <TitleDeshboard>{pokeDetail?.name}</TitleDeshboard>
          </ContainerImg>
        </ContainerPokemon>

        <GraficTooltip item={pokeDetail} />

        <TitleH>Abiliity</TitleH>
        <ContainerFlex>
          {pokeDetail?.abilities.map((item) => (
            <>
              <CardDescription
                key={item.ability.name}
                itemNome={item.ability.name}
                url={item.ability.url}
              />
            </>
          ))}
        </ContainerFlex>
        <TitleH>Description</TitleH>
        <TextDescription pokeProps={pokeProps} description={description} />
      </ContainerAbout>
    );
  }
  return <>{renderComponent()}</>;
}
