import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const list = () => {
  // Define the data array correctly
  const rows = [
    {
      id: 1,
      product: "Wireless Headphones",
      img: "https://www.leafstudios.in/cdn/shop/files/Mainupdated_35a234be-57a2-41b6-b8db-79b54b7f5a7f_grande.jpg?v=1690372991",
      customer: "John Doe",
      date: "2025-03-10",
      amount: "$120",
      method: "Credit Card",
      status: "Approved",
    },
    {
      id: 2,
      product: "Smartphone",
      img: "https://i.guim.co.uk/img/media/2ce8db064eabb9e22a69cc45a9b6d4e10d595f06/392_612_4171_2503/master/4171.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=45b5856ba8cd83e6656fbe5c166951a4",
      customer: "Alice Johnson",
      date: "2025-03-08",
      amount: "$799",
      method: "PayPal",
      status: "Approved",
    },
    {
      id: 3,
      product: "Gaming Laptop",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4oIw-VNFZCUwi216AKd_MvAZKGw016o5-g&s",
      customer: "Robert Brown",
      date: "2025-03-07",
      amount: "$1500",
      method: "Bank Transfer",
      status: "Approved",
    },
    {
      id: 4,
      product: "Bluetooth Speaker",
      img: "https://m.media-amazon.com/images/I/713TUYjagQL.jpg",
      customer: "Emma Davis",
      date: "2025-03-06",
      amount: "$60",
      method: "Credit Card",
      status: "Approved",
    },
    {
      id: 5,
      product: "Smartwatch",
      img: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25208120/2023/9/26/0a21665f-e7f2-401a-ae47-4903cf1c5ebe1695720756900-CMF-by-Nothing-Watch-Pro-8711695720756698-1.jpg",
      customer: "Michael Smith",
      date: "2025-03-05",
      amount: "$250",
      method: "UPI",
      status: "Approved",
    },
    {
      id: 6,
      product: "Wireless Mouse",
      img: "https://m.media-amazon.com/images/I/61OwbbvdJqL.jpg",
      customer: "Sophia Wilson",
      date: "2025-03-04",
      amount: "$30",
      method: "Debit Card",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt={row.product} className="image" />
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default list;
