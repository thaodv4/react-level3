import { memo, useCallback } from "react";
import { Button } from "../../button";
import { useStore } from "../../../hooks/useStore";
import styled from "styled-components";

export const Change = memo(() => {
  const [, setStore] = useStore("example1");
  const handleChange = useCallback(() => {
    setStore(Math.random());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Root>
      <h3>Component Will Change</h3>
      <Button onClick={handleChange}>Click to change</Button>
    </Root>
  );
});

const Root = styled.div`
  width: 50%;
`;
