import styled from "styled-components";
import { AutoFilterDropdown } from "../auto-filter-dropdown";
import { data } from "./data";
import { memo, useCallback } from "react";

export const Example3 = memo(() => {
  const handleSelect = useCallback((item) => {
    console.log(item);
  }, []);

  const handleValueChange = useCallback((item) => {
    console.log(item);
  }, []);

  return (
    <Root>
      <h2>EXERCISE 3 Example </h2>
      <Container>
        <div>
          <h3>Normal</h3>
          <AutoFilterDropdown
            id={"id"}
            onSelect={handleSelect}
            valueChange={handleValueChange}
            property={"name"}
            data={data}
          />
        </div>
        <div>
          <h3>Nested property</h3>
          <AutoFilterDropdown
            id={"id"}
            onSelect={handleSelect}
            valueChange={handleValueChange}
            property={"address.street"}
            data={data}
          />
        </div>
      </Container>
    </Root>
  );
});

const Root = styled.div`
  margin-top: 24px;
`;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
`;
