import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import DisplayCard from "./DisplayCard";

import InfiniteScroll from "react-infinite-scroll-component";

const ResultsDisplay = () => {
  const searchTerm = useAppSelector((state) => state.app.searchTerm);
  const status = useAppSelector((state) => state.app.status);
  const loadedResults = useAppSelector((state) => state.app.loadedResults);
  const { errorMessage } = useAppSelector((state) => state.app);

  const { resultCount, results = [] } = loadedResults;

  const [resultsToDisplay, setResultsToDisplay] = useState(results.slice(0, 10));

  useEffect(() => {
    if (results?.length) setResultsToDisplay(results.slice(0, 10));
  }, [results]);

  const fetchMoreData = () => {
    setTimeout(() => {
      setResultsToDisplay((data) => {
        return [...data, ...results?.slice(data?.length, data?.length + 10)];
      });
    }, 1000);
  };

  if (status === "idle") {
    return (
      <Typography align="center" gutterBottom variant="h6">
        Enter something in the search box to begin search...
      </Typography>
    );
  }

  if (status === "loading") {
    return (
      <Typography align="center" gutterBottom variant="h6">
        Loading....
      </Typography>
    );
  }

  if (status === "loaded" && !results?.length) {
    return (
      <Typography align="center" gutterBottom variant="h6">
        No results found
      </Typography>
    );
  }

  if (status === "failed") {
    return (
      <Typography align="center" gutterBottom variant="h6">
        {errorMessage}, please refresh page and try again
      </Typography>
    );
  }

  return (
    <div>
      <Typography align="center" variant="h6" data-testid="header-text">
        Now displaying results for '{searchTerm}'
      </Typography>

      <Typography align="center" gutterBottom variant="h6" data-testid="header-count">
        {resultCount} results
      </Typography>

      <InfiniteScroll
        dataLength={resultsToDisplay.length}
        next={fetchMoreData}
        hasMore={results?.length - resultsToDisplay?.length !== 0}
        loader={
          <Typography align="center" gutterBottom variant="h6">
            Loading...
          </Typography>
        }
        endMessage={
          <Typography align="center" gutterBottom>
            Yay! You have reached the end
          </Typography>
        }
      >
        <Grid container spacing={2} sx={{ padding: 2 }}>
          {resultsToDisplay.map((result, index) => {
            return (
              <Grid key={index} item xs={12} sm={4} data-testid="card-grid">
                <DisplayCard key={index} result={result} index={index} />
              </Grid>
            );
          })}
        </Grid>
      </InfiniteScroll>
    </div>
  );
};

export default ResultsDisplay;
