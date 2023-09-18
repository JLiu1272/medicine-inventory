import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type MedicineTableProps = {
  query: string;
};

type MedicineType = {
  ID: number;
  name: string;
  count: number;
  date: Date;
};
function createData({ ID, name, count, date }: MedicineType) {
  return { ID, name, count, date };
}

const rows = [
  createData({
    ID: 1217,
    name: "Panadol",
    count: 6,
    date: new Date(),
  }),
  createData({
    ID: 1218,
    name: "Tylenol",
    count: 7,
    date: new Date(),
  }),
  createData({
    ID: 1219,
    name: "Retinol",
    count: 2,
    date: new Date(),
  }),
];

function queryMatches({ query, ID, name }: MedicineType & MedicineTableProps) {
  return name.includes(query) || String(ID).includes(query) || query === "";
}

export default function MedicineTable({ query }: MedicineTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Chinese Name</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            console.log("Query: " + query);
            if (queryMatches({ ...row, query })) {
              return (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.ID}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.count}</TableCell>
                  <TableCell align="right">{row.date.toString()}</TableCell>
                </TableRow>
              );
            }
            return null;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
