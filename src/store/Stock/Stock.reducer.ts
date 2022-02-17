import { actions, PropsAction } from "./Stock.actions";

type Action = {
  type: keyof typeof actions;
  payload: PropsAction;
};

export default function mathReducer(
  state: PropsAction = { name: "pikachu", id: 25 },
  action: Action
) {
  switch (action.type) {
    case actions.INCREMENT:
      return (state = action.payload);

    default:
      return state;
  }
}
