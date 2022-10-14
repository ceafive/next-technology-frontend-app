/* eslint-disable testing-library/no-unnecessary-act */
import InputBar from "../components/InputBar";
import ResultsDisplay from "../components/ResultsDisplay";
import { Provider } from "react-redux";
import { render, screen, fireEvent, RenderResult } from "@testing-library/react";
import { store } from "../app/store";
import { Result, setResults } from "../features/app/appSlice";
import { act } from "react-dom/test-utils";
import { result, sample } from "../utils";

const renderInputBar = (): RenderResult =>
  render(
    <Provider store={store}>
      <InputBar />
      <ResultsDisplay />
    </Provider>
  );

describe("Input component testing", () => {
  test("Renders Input", () => {
    renderInputBar();
    expect(screen.getByTestId("input-bar-box")).toBeInTheDocument();

    let searchInput = screen.getByPlaceholderText("Enter here to search...");
    expect(searchInput).toBeInTheDocument();

    const inputted = "burna boy";

    fireEvent.change(searchInput, { target: { value: inputted } });
    expect(searchInput).toHaveValue(inputted);

    //
    let state = store.getState().app;
    const loadedResults = state.loadedResults;

    expect(loadedResults).toMatchObject({ resultCount: 0, results: [] });
    const parsed = JSON.parse(
      JSON.stringify({
        ...sample,
        resultCount: 50,
        results: new Array(50).fill(result) as Result[],
      })
    );
    act(() => {
      store.dispatch(setResults(parsed));
    });

    state = store.getState().app;
    const newLoadedResults = state.loadedResults;

    expect(newLoadedResults).toMatchObject(parsed);
    expect(screen.getByTestId("header-text")).toHaveTextContent(
      `Now displaying results for '${inputted}'`
    );
    expect(screen.getByTestId("header-count")).toHaveTextContent(
      `${newLoadedResults.resultCount} results`
    );

    expect(screen.getAllByTestId("card-grid")).toHaveLength(10);

    const firstItem = newLoadedResults.results?.[0];

    const artistName = firstItem.artistName;
    const trackCensoredName = firstItem.trackCensoredName!;
    const releaseDate = new Date(firstItem?.releaseDate).toDateString();

    expect(screen.getByTestId(`card-display-0`)).toBeInTheDocument();
    expect(screen.getByTestId(`card-display-0`)).toHaveTextContent(artistName);
    expect(screen.getByTestId(`card-display-0`)).toHaveTextContent(trackCensoredName);
    expect(screen.getByTestId(`card-display-0`)).toHaveTextContent(releaseDate);
  });
});
