import { useState, useEffect } from "react";
import Card from "../../components/Card";
import { ContainerHomer, ContainerSerch } from "./styled";
import React from "react";
import { pokeLista } from "./type";
import { ftruncateSync } from "fs";
import CampoProcura from "components/CampoProcura";

export default function Home() {
  const [pokeList, setPokeList] = useState<pokeLista[]>();
  const [busca, setBusca] = useState("");
  const pokeFilter = pokeList?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(busca.toLowerCase())
  );

  const imprimirPokemons = async () => {
    const api = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=400",
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
  }, []);

  return (
    <ContainerHomer>
      <ContainerSerch>
        <CampoProcura setBusca={setBusca} />
      </ContainerSerch>

      {pokeFilter?.map((item) => (
        <Card key={item.name} pokeImg={item.url} pokeName={item.name} />
      ))}
    </ContainerHomer>
  );
}
