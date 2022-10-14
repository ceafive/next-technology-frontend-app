// material
import { alpha } from "@mui/material/styles";
import palette from "./palette";

const LIGHT_MODE = palette.grey[500];

const createCustomShadow = (color) => {
  const transparent = alpha(color, 0.24);

  return {
    z16: `0 0 2px 0 ${transparent}, 0 16px 32px -4px ${transparent}`,
  };
};

export const customShadows = createCustomShadow(LIGHT_MODE);
