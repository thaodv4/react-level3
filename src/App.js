import styled from "styled-components";
import { Example1 } from "./components/example1";
import { Example2 } from "./components/example2";
import { Example3 } from "./components/example3";
function App() {
  return (
    <Root>
      <Example1 />
      <Example2 />
      <Example3 />
    </Root>
  );
}
const Root = styled.div`
  width: 1140px;
  margin: 0 auto;
`;

export default App;
