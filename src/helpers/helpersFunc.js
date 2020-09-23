const capitalize = (word) => {
  return word.replace(/\b\w/g, (char) => char.toUpperCase());
};

export default capitalize;
