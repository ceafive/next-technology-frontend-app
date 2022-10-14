import { store } from "../app/store";
import { setSearchTerm, setReset, setResults, Result } from "../features/app/appSlice";
import { result, sample } from "../utils";

afterEach(() => {
  store.dispatch(setReset());
});

describe("redux store", () => {
  test("updates search term correctly", () => {
    let state = store.getState().app;
    const searchTerm = state.searchTerm;
    expect(searchTerm).toBe("");

    store.dispatch(setSearchTerm("Castro"));

    state = store.getState().app;
    const newSearchTerm = state.searchTerm;
    expect(newSearchTerm).toBe("Castro");

    store.dispatch(setSearchTerm(""));
    state = store.getState().app;
    const oldearchTerm = state.searchTerm;

    expect(oldearchTerm).toBe("");
  });

  test("sets results properly", () => {
    let state = store.getState().app;

    let parsed = JSON.parse(
      JSON.stringify({
        ...sample,
        resultCount: 50,
        results: new Array(50).fill(result) as Result[],
      })
    );

    store.dispatch(setResults(parsed));

    state = store.getState().app;

    expect(state.loadedResults.resultCount).toBe(50);
    expect(state.loadedResults.results).toHaveLength(50);

    parsed = JSON.parse(
      JSON.stringify({
        ...sample,
        resultCount: 2,
        results: new Array(2).fill(result) as Result[],
      })
    );

    store.dispatch(setResults(parsed));

    state = store.getState().app;

    expect(state.loadedResults.resultCount).toBe(2);
    expect(state.loadedResults.results).toHaveLength(2);
  });

  test("resets state", () => {
    const parsed = JSON.parse(
      JSON.stringify({
        ...sample,
        resultCount: 5,
        results: new Array(5).fill(result) as Result[],
      })
    );

    store.dispatch(setSearchTerm("Castro"));
    store.dispatch(setResults(parsed));

    let state = store.getState().app;

    expect(state.searchTerm).toBe("Castro");
    expect(state.loadedResults.resultCount).toBe(5);
    expect(state.loadedResults.results).toHaveLength(5);

    store.dispatch(setReset());
    state = store.getState().app;

    expect(state.searchTerm).toBe("");
    expect(state.loadedResults.resultCount).toBe(0);
    expect(state.loadedResults.results).toHaveLength(0);
  });
});
