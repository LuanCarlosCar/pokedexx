import { PokeInfoDashboard } from "pages/Sobre/type";
import React, { useEffect, useState } from "react";
import { PokeEvolutionProps, Propsspecies2 } from "./type";

export default function PokeEvolution(props) {
  const { pokeid } = props;
  const [pokeDetail, setPokeDetail] = useState<Propsspecies2>();
  const imprimirPokemons = async () => {
    const api = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${pokeid}`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-type": "application/json",
        },
      }
    );
    const data = await api.json();
    console.log("pqp", data.chain.evolves_to);
    setPokeDetail(data.chain.evolves_to);
  };
  useEffect(() => {
    imprimirPokemons();
  }, []);

  return <h1>{pokeDetail?.species.name}</h1>;
}
