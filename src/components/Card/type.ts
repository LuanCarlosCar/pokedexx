export interface PokeInfo {
  id?: number;
  name?: string;
  order: number;
  sprites: TypeSprites;
}

export interface TypeSprites {
  front_default?: string;
  back_default?: string;
  other?: PropsOther;
}

export interface Typeloading {
  loading: boolean;
}

export interface PropsOther {
  home?: PropsHome;
}

export interface PropsHome {
  front_default?: string;
  back_default?: string;
}
