import { css } from "styled-components";
import { Color } from "../../../../shared/constants/color";

const { COLOR_000000_080 } = Color;

export const getRootStyleDialog = ({ $isModal }) => {
  if ($isModal) {
    return css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${COLOR_000000_080};
    `;
  }
  return null;
};
