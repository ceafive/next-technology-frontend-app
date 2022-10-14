import { Container } from "@mui/material";
import React from "react";
import InputBar from "./components/InputBar";

import ResultsDisplay from "./components/ResultsDisplay";

function App() {
  return (
    <Container component="main" maxWidth="md" sx={{ padding: 2 }}>
      <InputBar />
      <ResultsDisplay />
    </Container>
  );
}

export default App;
