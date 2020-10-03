const capitalize = (word) => {
  if (word)
    return word.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
};

export default capitalize;
