import React from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import Database from "../../Components/datatable/Datatable";
import "./list.scss"
export default function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar/>
        <Database />
      </div>
    </div>
  );
}
