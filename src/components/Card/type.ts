export interface PokeInfo {
  id?: number;
  name?: string;
  order: number;
  sprites: TypeSprites;
}

export interface TypeSprites {
  front_default?: string;
  back_default?: string;
}

export interface Typeloading {
  loading: boolean;
}
