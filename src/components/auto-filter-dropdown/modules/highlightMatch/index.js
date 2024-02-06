export const highlightMatch = (text, filterText) => {
  const regex = new RegExp(`(${filterText})`, "gi");
  return text.replace(regex, "<strong>$1</strong>");
};
