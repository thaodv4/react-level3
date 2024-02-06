export const getDataByKey = (object, path) => {
  const keys = path?.split(".");
  if (!keys) return;
  if (keys.length === 0) {
    return object[path];
  }
  let value = object;
  for (const key of keys) {
    if (value && value.hasOwnProperty(key)) {
      value = value[key];
    } else {
      return undefined;
    }
  }

  return value;
};
