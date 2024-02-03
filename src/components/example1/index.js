import styled from "styled-components";
import { Change } from "./change";
import { DisplayChange } from "./display-change";
import { memo } from "react";

export const Example1 = memo(() => {
  return (
    <Root>
      <h2>EXERCISE 1 Example </h2>
      <div>
        <Change />
        <DisplayChange />
      </div>
    </Root>
  );
});

const Root = styled.div`
  width: 800px;
  margin: 0 auto;
`;
