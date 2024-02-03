import { useEffect, useState } from "react";
import { getValueLocal } from "../../shared/utils/getValueLocal";

export const useStore = (key) => {
  const [value, setValue] = useState(getValueLocal(key));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event("storage"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    const handleStorageChange = (event) => {
      setValue(getValueLocal(key));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [value, setValue];
};
