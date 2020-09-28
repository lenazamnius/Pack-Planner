const capitalize = (word) => {
  if (word) return word.replace(/\b\w/g, (char) => char.toUpperCase());
};

export default capitalize;
