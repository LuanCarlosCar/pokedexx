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

export default function Card(props) {
  const { pokeName } = props;
  const [pokeImg, setPokeimg] = useState<PokeInfo>();
  const [loading, setLoadiang] = useState<Typeloading>({ loading: true });
  const dispatch = useDispatch();

  const imprimirPokemons = async () => {
    setLoadiang({ ...loading, loading: true });
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`, {
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

  useEffect(() => {
    imprimirPokemons();
  }, []);

  function renderComponentLoad() {
    if (loading?.loading) {
      return <PreLoaderCard />;
    }

    return (
      <StyleContainer
        onClick={() => dispatch(increment({ name: pokeName, id: pokeImg?.id }))}
      >
        <LinkCard to="/sobre">
          <PokeImage src={pokeImg?.sprites.front_default} />
          <TextTitle>{pokeName}</TextTitle>
          <TextName>#{pokeImg?.order}</TextName>
        </LinkCard>
      </StyleContainer>
    );
  }

  return <ContainerCard>{renderComponentLoad()}</ContainerCard>;
}
