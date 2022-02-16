import { actions } from "./Stock.actions";

type Action = {
  type: keyof typeof actions;
  payload?: any;
};

export default function mathReducer(state: string = "pikachu", action: Action) {
  switch (action.type) {
    case actions.INCREMENT:
      return (state = action.payload);

    default:
      return state;
  }
}
