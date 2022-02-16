import axios from "axios";
import { PokeInfo } from "components/Card/type";
import { pokeLista } from "pages/home/type";
import React, { createContext, useEffect, useState } from "react";

interface PropsContext {
  setPokeSobre: React.Dispatch<React.SetStateAction<PokeInfo | undefined>>;
}
interface ListContextProviderProps {
  children: React.ReactNode;
}

export const ListContext = createContext({});
export const ListProvider = ({ children }: ListContextProviderProps) => {
  const [pokeSobre, setPokeSobre] = useState<PokeInfo>();
  // const [filter, setFilter] = useState("");

  //  const filteredData = Object.values(PokeList).filter(function(obj) { return obj.name.toLowerCase().includes(filter.toLowerCase())});// lista.filter(function(obj) { return obj.name.toLowerCase().includes(filter.toLowerCase())});

  return (
    <ListContext.Provider value={setPokeSobre}>{children}</ListContext.Provider>
  );
};
