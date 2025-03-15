import * as React from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColums, userRows } from "../../datatablesource";
const paginationModel = { page: 0, pageSize: 5 };

export default function Database() {
  const actionColum = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColums.concat(actionColum)}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </div>
  );
}
