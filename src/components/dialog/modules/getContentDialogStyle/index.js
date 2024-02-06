import { css } from "styled-components";
import { Color } from "../../../../shared/constants/color";

const { COLOR_000000_030 } = Color;

export const getContentDialogStyle = ({ $isModal }) => {
  if (!$isModal) {
    return css`
      box-shadow: 0 0 20px 5px ${COLOR_000000_030};
    `;
  }
};
