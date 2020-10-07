export const capitalize = (word) => {
  if (word)
    return word.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
};

export const totalWeight = (list) => {
  const categoryWeightArr = list.map((category) =>
    category.list.reduce((total, item) => total + item.weight * item.qty, 0),
  );

  return categoryWeightArr.reduce((total, item) => total + item, 0).toFixed(3);
};
