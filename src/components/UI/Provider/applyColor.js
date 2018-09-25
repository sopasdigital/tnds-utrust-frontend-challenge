import colors from "./colors";

export const applyColor = props => {
  switch (props.color || props.background) {
    case "yellow":
      return colors.yellow;
    case "red":
      return colors.red;
    case "green":
      return colors.green;
    case "purple":
      return colors.purple.default;
    case "white":
      return colors.greyscale.white;
    case "light-grey":
      return colors.greyscale.grey.light;
    case "grey":
      return colors.greyscale.grey.default;
    case "dark-grey":
      return colors.greyscale.grey.dark;
    default:
      return colors.greyscale.black;
  }
};
