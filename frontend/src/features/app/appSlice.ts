import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FetchResultsData {
  resultCount: number;
  results: Result[];
}

export interface Result {
  artistId?: number;
  artistName: string;
  artistViewUrl?: string;
  artworkUrl100: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl600?: string;
  collectionArtistId?: number;
  collectionArtistName?: string;
  collectionArtistViewUrl?: string;
  collectionCensoredName?: string;
  collectionExplicitness: string;
  collectionHdPrice?: number;
  collectionId?: number;
  collectionName?: string;
  collectionPrice: number;
  collectionViewUrl?: string;
  contentAdvisoryRating?: string;
  copyright?: string;
  country: string;
  currency: string;
  description?: string;
  discCount?: number;
  discNumber?: number;
  feedUrl?: string;
  genreIds?: string[];
  genres?: string[];
  hasITunesExtras?: boolean;
  isStreamable?: boolean;
  kind?: string;
  longDescription?: string;
  previewUrl?: string;
  primaryGenreName: string;
  releaseDate: Date;
  shortDescription?: string;
  trackCensoredName?: string;
  trackCount?: number;
  trackExplicitness?: string;
  trackHdPrice?: number;
  trackHdRentalPrice?: number;
  trackId?: number;
  trackName?: string;
  trackNumber?: number;
  trackPrice?: number;
  trackRentalPrice?: number;
  trackTimeMillis?: number;
  trackViewUrl?: string;
  wrapperType: string;
}

export interface AppState {
  errorMessage: string;
  searchTerm: string;
  status: "idle" | "loading" | "loaded" | "failed";
  loadedResults: FetchResultsData;
}

const initialState: AppState = {
  errorMessage: "",
  status: "idle",
  searchTerm: "",
  loadedResults: {
    resultCount: 0,
    results: [],
  },
};

interface MyKnownError {
  message: string;
  success: boolean;
  results: [];
}

export const fetchResultsBySearchTerm = createAsyncThunk<
  FetchResultsData,
  string,
  {
    rejectValue: MyKnownError;
  }
>("app/fetchBySearchTerm", async (url: string, thunkApi) => {
  const response = await fetch(url);

  if (response.status === 400) {
    return thunkApi.rejectWithValue((await response.json()) as MyKnownError);
  }
  return (await response.json()) as FetchResultsData;
});

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setResults: (state, action: PayloadAction<FetchResultsData>) => {
      state.loadedResults = action.payload;
      state.status = "loaded";
    },
    setReset: () => {
      return initialState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchResultsBySearchTerm.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchResultsBySearchTerm.fulfilled, (state, action) => {
        state.status = "loaded";
        state.loadedResults = action.payload;
      })
      .addCase(fetchResultsBySearchTerm.rejected, (state, action) => {
        const { message, success } = action.payload!;

        if (success) {
          return initialState;
        }
        return { ...initialState, status: "failed", errorMessage: message };
      });
  },
});

export const { setSearchTerm, setReset, setResults } = appSlice.actions;
export default appSlice.reducer;
