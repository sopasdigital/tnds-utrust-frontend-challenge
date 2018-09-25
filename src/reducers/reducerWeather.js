import { types } from "../actions";

export default function(state = [], { type, payload }) {
  const { FETCH_WEATHER_COMPLETE } = types;

  switch (type) {
    case FETCH_WEATHER_COMPLETE:
      return [payload, ...state];

    default:
      return state;
  }
}
