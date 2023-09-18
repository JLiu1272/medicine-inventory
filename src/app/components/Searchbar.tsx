import TextField, { TextFieldProps } from "@mui/material/TextField";

export default function SearchBar(params: TextFieldProps) {
  return (
    <TextField
      id="filled-basic"
      fullWidth
      label="Search for medicine"
      variant="outlined"
      {...params}
    />
  );
}
