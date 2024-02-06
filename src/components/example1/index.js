import styled from "styled-components";
import { Change } from "./change";
import { DisplayChange } from "./display-change";
import { memo } from "react";

export const Example1 = memo(() => {
  return (
    <div>
      <h2>EXERCISE 1 Example </h2>
      <Container>
        <Change />
        <DisplayChange />
      </Container>
    </div>
  );
});

const Container = styled.div`
  display: flex;
`;
