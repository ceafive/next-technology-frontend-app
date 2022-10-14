import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

// theme
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";

// const theme = createTheme({
//   typography: {
//     fontFamily: ["Mulish"].join(","),
//   },
//   palette: {
//     primary: {
//       light: "#3b277b",
//       main: "#02004e",
//       dark: "#000027",
//       contrastText: "#fff",
//     },
//     secondary: {
//       light: "#838cff",
//       main: "#415fff",
//       dark: "#0036cb",
//       contrastText: "#000",
//     },
//   },
// });

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <React.Fragment>
        <ThemeConfig>
          <GlobalStyles />
          <App />
        </ThemeConfig>
      </React.Fragment>
      ,
    </Provider>
  </React.StrictMode>
);
