import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// import TableBody from "./TableBody/TableBody";
// import TableHeader from "./TableHeader/TableHeader";
import { getMovies } from "../../services/api";
import "./style.css";
import { getCells, getHeaderCells } from "../../utils/common";
import TableHeader from "../../components/TableHeader/TableHeader";
import TableRow from "../../components/TableRow/TableRow";
// import TableRow from "./TableRow/TableRow";

export default function MoviesContainer() {
  const history = useHistory();
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const res = await getMovies();
    console.log("res", res.data.Search);
    setMovies(res.data.Search);
  }, []);

  const onCellClick = useCallback((id) => {
    history.push(`movies/${id}`);
  });

  const getRowData = (rowItem) => Object.values(getCells(rowItem));

  return (
    <table className="movie-table">
      <TableHeader items={getHeaderCells(movies)} />
      <tbody>
        {movies.map((rowItem) => (
          <TableRow
            key={rowItem.imdbID}
            rowItems={getRowData(rowItem)}
            onCellClick={() => onCellClick(rowItem.imdbID)}
          />
        ))}
      </tbody>
      {/* <TableBody data={movies} onCellClick={onCellClick} /> */}
    </table>
  );
}
