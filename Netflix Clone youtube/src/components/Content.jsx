import React from "react";
import Row from "./Row";

import {movies,movies2} from './data'

const Content = () => {
  return (
    <div>
      <div className="content">
        <Row title="Trending Now" posters={movies} />
        <Row title="Top Picks for You" posters={movies2} />
        <Row title="Most Popular" posters={movies2} />
      </div>
    </div>
  );
};

export default Content;
