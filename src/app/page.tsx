"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import SearchBar from "./components/Searchbar";
import MedicineTable from "./components/MedicineTable";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <Box margin={5}>
      <Typography variant="h1">Medicine Inventory</Typography>
      <SearchBar onChange={onChange} />
      <Box marginTop={5}>
        <MedicineTable query={query} />
      </Box>
    </Box>
  );
}
