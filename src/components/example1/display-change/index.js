import { memo } from "react";
import { useStore } from "../../../hooks/useStore";

export const DisplayChange = memo(() => {
  const [value] = useStore("example1");
  return (
    <>
      <div>
        <h3>Component Display Change</h3>
        <p>Result change: {value}</p>
      </div>
    </>
  );
});
