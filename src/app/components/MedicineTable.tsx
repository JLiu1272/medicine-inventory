import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

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
  createData({
    ID: 1220,
    name: "Strattera",
    count: 2,
    date: new Date(),
  }),
  createData({
    ID: 1221,
    name: "Adderall",
    count: 4,
    date: new Date(),
  }),
  createData({
    ID: 1222,
    name: "dextroamphetamine",
    count: 4,
    date: new Date(),
  }),
];

const columns: GridColDef[] = [
  { field: "ID", headerName: "ID", width: 100 },
  { field: "name", headerName: "Name", width: 100 },
  { field: "count", headerName: "Count", width: 100 },
  { field: "date", headerName: "Date", minWidth: 300 },
];

function queryMatches({ query, ID, name }: MedicineType & MedicineTableProps) {
  return name.includes(query) || String(ID).includes(query) || query === "";
}

function filterRows(query: string) {
  return rows.filter((row) => queryMatches({ query, ...row }));
}

export default function MedicineTable({ query }: MedicineTableProps) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={filterRows(query)}
        getRowId={(row) => row.ID}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
