const dateFormat = (publishedAt) => {
  const date = publishedAt.toString();
  const shortenedDate = new Date(date.substr(0, 4), date.substr(5, 2) - 1, date.substr(8, 2));
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const localDate = shortenedDate.toLocaleString('ru', options);
  const formattedDate = `${localDate.substr(0, 10)}, ${localDate.substr(11, 4)}`;
  return formattedDate;
};

export default dateFormat;
