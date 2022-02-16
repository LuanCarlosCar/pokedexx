import { useState, useEffect } from "react";
import Card from "../../components/Card";
import { ContainerHomer } from "./styled";
import React from "react";
import { pokeLista } from "./type";

export default function Home() {
  const [pokeList, setPokeList] = useState<pokeLista[]>();
  // const [filter, setFilter] = useState("");
  const imprimirPokemons = async () => {
    const api = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100",
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
      {pokeList?.map((item) => (
        <Card key={item.name} pokeImg={item.url} pokeName={item.name} />
      ))}
    </ContainerHomer>
  );
}
