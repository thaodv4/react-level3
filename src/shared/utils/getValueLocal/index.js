export const getValueLocal = (key) => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : null;
  } catch {
    return null;
  }
};
