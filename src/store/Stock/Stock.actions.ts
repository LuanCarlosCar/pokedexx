export const actions = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

export interface PropsAction {
  name: string;
  id?: number;
}

export function increment({ name, id }: PropsAction) {
  return { type: actions.INCREMENT, payload: { name, id } };
}

export function decrement() {
  return { type: actions.DECREMENT };
}
