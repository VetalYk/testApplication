/* eslint-disable import/prefer-default-export */
const getHeaderTitles = (movies) => {
  if (movies.length === 0) return [];
  return Object.keys(movies[0]);
};

export const getHeaderCells = (movies) => {
  if (movies && movies.length !== 0) {
    return getHeaderTitles(movies).filter(
      (i) => i !== "imdbID" && i !== "Type"
    );
  }

  return [];
};

export const getCells = (item) => ({
  Title: item.Title || "",
  Year: item.Year || "",
  Poster: item.Poster,
});

export const getTodoCells = (item) => ({
  title: item.title,
  date: item.date,
});
