import { PokeInfo } from "components/Card/type";

export interface PokeInfoDashboard extends PokeInfo {
  stats: PropsStats[];
  abilities: PropsAbilities[];
}

interface PropsStats {
  base_stat: number;
  effort?: number;
  stat: PropsStat;
}

interface PropsStat {
  name: string;
  url?: string;
}

interface PropsAbilities {
  ability: PropsAbility;
}

interface PropsAbility {
  name: string;
  url?: string;
}

export interface PokeProps {
  name: string;
  id?: number;
}
