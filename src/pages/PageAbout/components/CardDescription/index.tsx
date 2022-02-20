import React, { useEffect, useState } from "react";
import { NavbarDescription, ContainerDescription, TextName } from "./style";
import { effectEntries } from "./type";

export default function CardDescription(props) {
  const [effect, setEffect] = useState<effectEntries>();
  const imprimirPokemons = async () => {
    const api = await fetch(`${props.url}`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
      },
    });
    const data = await api.json();
    setEffect(data);
  };
  useEffect(() => {
    imprimirPokemons();
  }, []);

  return (
    <NavbarDescription name={props.itemNome}>
      <li>
        <TextName>{props?.itemNome}</TextName>
        <ContainerDescription>
          <p>{effect?.effect_entries[0].effect}</p>
        </ContainerDescription>
      </li>
    </NavbarDescription>
  );
}
