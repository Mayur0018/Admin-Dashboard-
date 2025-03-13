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
      img: "https://m.media-amazon.com/images/I/71K8huYY-KL._AC_SY355_.jpg",
      customer: "John Doe",
      date: "2025-03-10",
      amount: "$120",
      method: "Credit Card",
      status: "Shipped",
    },
    {
      id: 2,
      product: "Smartphone",
      img: "https://m.media-amazon.com/images/I/61H+V56T7eL._AC_SY355_.jpg",
      customer: "Alice Johnson",
      date: "2025-03-08",
      amount: "$799",
      method: "PayPal",
      status: "Processing",
    },
    {
      id: 3,
      product: "Gaming Laptop",
      img: "https://m.media-amazon.com/images/I/71k45rD8L2L._AC_SY355_.jpg",
      customer: "Robert Brown",
      date: "2025-03-07",
      amount: "$1500",
      method: "Bank Transfer",
      status: "Delivered",
    },
    {
      id: 4,
      product: "Bluetooth Speaker",
      img: "https://m.media-amazon.com/images/I/61ioD1H9NGL._AC_SY355_.jpg",
      customer: "Emma Davis",
      date: "2025-03-06",
      amount: "$60",
      method: "Credit Card",
      status: "Cancelled",
    },
    {
      id: 5,
      product: "Smartwatch",
      img: "https://m.media-amazon.com/images/I/71eJk3fr3lL._AC_SY355_.jpg",
      customer: "Michael Smith",
      date: "2025-03-05",
      amount: "$250",
      method: "UPI",
      status: "Delivered",
    },
    {
      id: 6,
      product: "Wireless Mouse",
      img: "https://m.media-amazon.com/images/I/71ue8mR3NML._AC_SY355_.jpg",
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
                    <img src={row.img} alt="" className="image" />
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default list;
