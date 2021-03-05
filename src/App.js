import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "./App.css";
import TabBar from "./components/TabBar/TabBar";
import MovieDetails from "./pages/MoiveDetails/MovieDetails";
import MoviesContainer from "./pages/Movies/MoviesContainer";
import TodoContainer from "./pages/Todo/TodoContainer";
import TodoDetails from "./pages/TodoDetails/TodoDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-container">
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
          <Route exact path="/movies" component={MoviesContainer} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/todo" component={TodoContainer} />
          <Route exact path="/todo/:id" component={TodoDetails} />
        </div>
        <TabBar />
      </div>
    </Router>
  );
}

export default App;
