export const actions = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};
interface props {
  name: string;
  id?: number;
}

export function increment({ name, id }: props) {
  return { type: actions.INCREMENT, payload: { name, id } };
}

export function decrement() {
  return { type: actions.DECREMENT };
}
