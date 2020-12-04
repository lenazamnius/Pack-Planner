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

export const getDate = (date) => {
  return new Date(date.seconds * 1000)
    .toDateString()
    .split(' ')
    .splice(1)
    .join(' ');
};

export const showDates = (start, end) => {
  const sd = start && getDate(start);
  const ed = end && getDate(end);

  if (!start && !end) {
    return 'No Dates';
  } else if (start === end) {
    return sd;
  } else {
    return `${sd} - ${ed}`;
  }
};
