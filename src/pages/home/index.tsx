import { useState, useEffect } from "react";
import Card from "../../components/Card";
import {
  ContainerHomer,
  ContainerSerch,
  ContainerGrid,
  ContainerLoading,
} from "./styled";
import React from "react";
import { PropsPokeList } from "./type";
import InputSerch from "components/InputSerch";
import PreLoaderHomer from "./components/PreLoaderSobre";
import ButtonNav from "./components/ButtonNav";

export default function Home() {
  const [pokeList, setPokeList] = useState<PropsPokeList[]>();
  const [serch, setSerch] = useState("");
  const [serchLoading, setSerchLoading] = useState(false);
  const [pokedex, setPokedex] = useState<Number | any>(20);
  const [invisibleHeader, setInvisibleHeader] = useState<boolean>(false);
  const pokeFilter = pokeList?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(serch.toLowerCase())
  );

  const printPokemons = async () => {
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
    printPokemons();
  }, [pokedex]);
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setPokedex((currentPageInsideState) => currentPageInsideState + 10);
      }
    });
    intersectionObserver.observe(document.querySelector<any>("#sentinel"));
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
    intersectionObserver.observe(document.querySelector<any>("#top"));
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
        <InputSerch
          setSerchLoading={setSerchLoading}
          setSerch={setSerch}
          serch={serch.toLowerCase()}
        />
      </ContainerSerch>
      {renderButton()}
      {renderPokemons()}
      {serch ? "" : <div id="sentinel">Loading...</div>}
    </ContainerHomer>
  );
}
