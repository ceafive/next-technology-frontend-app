import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchResultsBySearchTerm, setSearchTerm } from "../features/app/appSlice";
import debounce from "lodash.debounce";

const InputBar = () => {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.app.searchTerm);

  const debouncedSearch = useRef(
    debounce(async (criteria) => {
      await dispatch(
        fetchResultsBySearchTerm(`/api/search?searchTerm=${encodeURIComponent(criteria)}`)
      );
    }, 300)
  ).current;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setSearchTerm(value));
    debouncedSearch(value);
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <Box sx={{ display: "flex" }} data-testid="input-bar-box">
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
        <OutlinedInput
          data-testid="input-box"
          value={searchTerm}
          onChange={handleOnChange}
          size="small"
          id="outlined-adornment-search"
          label="Search"
          type={"text"}
          placeholder="Enter here to search..."
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default InputBar;
