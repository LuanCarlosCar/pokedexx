import { Typeloading } from "components/Card/type";
import GraficTooltip from "components/GraficTooltip";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import CardDescription from "./components/CardDescription";
import PreLoaderSobre from "./components/PreLoaderSobre";
import {
  ContainerImg,
  ContainerSobre,
  ImgDeshboard,
  TitleDeshboard,
  Powers,
  ContainerFlex,
  TitleH,
} from "./style";
import { PokeInfoDashboard } from "./type";

export default function Sobre() {
  const [loading, setLoadiang] = useState<Typeloading>({ loading: true });
  const stock = useSelector<RootState>((state) => state);
  console.log("oi", stock);
  const [pokeDetail, setPokeDetail] = useState<PokeInfoDashboard>();

  const imprimirPokemons = async () => {
    setLoadiang({ ...loading, loading: true });
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${stock}`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
      },
    });
    const api2 = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${stock}`,
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
    setLoadiang({ ...loading, loading: false });
  };

  useEffect(() => {
    imprimirPokemons();
  }, []);

  function renderComponentLoad() {
    if (loading?.loading) {
      return <PreLoaderSobre />;
    }

    return (
      <ContainerSobre>
        <TitleDeshboard>{pokeDetail?.name}</TitleDeshboard>
        <ContainerImg>
          <ImgDeshboard src={pokeDetail?.sprites.front_default} />
          <ImgDeshboard src={pokeDetail?.sprites.back_default} />
        </ContainerImg>

        <GraficTooltip item={pokeDetail} />

        <TitleH>Habilidade</TitleH>
        <ContainerFlex>
          {pokeDetail?.abilities.map((item) => (
            <>
              <CardDescription
                itemNome={item.ability.name}
                url={item.ability.url}
              />
            </>
          ))}
        </ContainerFlex>
      </ContainerSobre>
    );
  }
  return <>{renderComponentLoad()}</>;
}
