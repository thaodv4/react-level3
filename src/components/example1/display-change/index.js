import { memo } from "react";
import { useStore } from "../../../hooks/useStore";
import styled from "styled-components";

export const DisplayChange = memo(() => {
  const [value] = useStore("example1");
  return (
    <Root>
      <h3>Component Display Change</h3>
      <p>Result change: {value}</p>
    </Root>
  );
});
const Root = styled.div`
  width: 50%;
`;
