import { useEffect, useState } from "react";
import { getValueLocal } from "../../shared/utils/getValueLocal";

export const useStore = (key) => {
  const [value, setValue] = useState(getValueLocal(key));

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

  const setStoreValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event("storage"));
    setValue(() => value);
  };

  return [value, setStoreValue];
};
