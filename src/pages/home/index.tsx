import { useState, useEffect } from "react";
import Card from "../../components/Card";
import {
  ContainerHomer,
  ContainerSerch,
  ContainerGrid,
  ContainerLoading,
} from "./styled";
import React from "react";
import { pokeLista } from "./type";
import CampoProcura from "components/CampoProcura";
import PreLoaderHomer from "./components/PreLoaderSobre";
import ButtonNav from "./components/ButtonNav";

export default function Home() {
  const [pokeList, setPokeList] = useState<pokeLista[]>();
  const [busca, setBusca] = useState("");
  const [serchLoading, setSerchLoading] = useState(false);
  const [pokedex, setPokedex] = useState<Number | any>(20);
  const [invisibleHeader, setInvisibleHeader] = useState<boolean>(false);
  const pokeFilter = pokeList?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(busca.toLowerCase())
  );

  const imprimirPokemons = async () => {
    const api = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${pokedex}`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-type": "application/json",
        },
      }
    );
    const data = await api.json();
    setPokeList(data.results);
  };

  useEffect(() => {
    imprimirPokemons();
  }, [pokedex]);
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        console.log("Esta vizivel", pokedex);
        setPokedex((currentPageInsideState) => currentPageInsideState + 10);
      }
    });
    intersectionObserver.observe(document.querySelector<any>("#sentinela"));
    return () => intersectionObserver.disconnect();
  }, []);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) {
        setInvisibleHeader(true);
      } else {
        setInvisibleHeader(false);
      }
    });
    intersectionObserver.observe(document.querySelector<any>("#topo"));
    return () => intersectionObserver.disconnect();
  }, []);

  function renderButton() {
    if (!invisibleHeader) {
      return <div />;
    }
    return <ButtonNav />;
  }

  function renderPokemons() {
    if (serchLoading) {
      return (
        <ContainerLoading>
          <PreLoaderHomer />
        </ContainerLoading>
      );
    }
    return (
      <ContainerGrid>
        {pokeFilter?.map((item) => (
          <Card key={item.name} pokeImg={item.url} pokeName={item.name} />
        ))}
      </ContainerGrid>
    );
  }

  return (
    <ContainerHomer>
      <ContainerSerch>
        <CampoProcura
          setSerchLoading={setSerchLoading}
          setBusca={setBusca}
          busca={busca.toLowerCase()}
        />
      </ContainerSerch>
      {renderButton()}
      {renderPokemons()}
      {busca ? "" : <div id="sentinela">Carregando...</div>}
    </ContainerHomer>
  );
}
