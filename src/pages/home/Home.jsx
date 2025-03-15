import React from "react";
import "./home.scss";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import Widget from "../../Components/widget/widget";
import Featured from "../../Components/featured/Featured";
import Charts from "../../Components/chart/chart";
import Table from "../../Components/table/Table";
export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
        <Featured />
        <Charts title = "Last 6 Months (Revenue)" aspect={2/1}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">
          <Table />
          </div>
        </div>
      </div>  
    </div>
  );
}
