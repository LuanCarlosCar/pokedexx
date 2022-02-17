export interface PokeEvolutionProps {
  chain: Propschain;
}
interface Propschain {
  evolves_to: Propsspecies2;
}
export interface Propsspecies2 {
  species: PropsSpecies;
}

export interface PropsSpecies {
  name: string;
  url?: string;
}
