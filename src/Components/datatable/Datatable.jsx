import * as React from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColums, userRows } from "../../Datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
const paginationModel = { page: 0, pageSize: 5 };

export default function Database() {
  const [data, setdata] = useState(userRows);

  const handleDeletedata = (id) => {
    setdata(data.filter(item => item.id !== id));
  };
  const actionColum = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <Link to="" style={{ textDecoration: "none" }}>
              <div
                className="deleteButton"
                onClick={() => handleDeletedata(params.row.id)}
              >
                Delete
              </div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link
          to="/users/new"
          style={{ textDecoration: "none" }}
          className="Link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
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
