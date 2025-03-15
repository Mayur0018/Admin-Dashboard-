import React from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import Chart from "../../Components/Chart/Chart";
import List from "../../Components/table/Table";
import "./single.scss";

export default function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">information</h1>
            <div className="iteam">
              <img
                src="https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFufGVufDB8fDB8fHww"
                alt=""
                className="iteamImg"
              />
              <div className="details">
                <h1 className="iteamTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemKey">janedow@gamil.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemKey">janedow@gamil.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemKey">+ 1245571547</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adress :</span>
                  <span className="itemKey">
                    Elton St 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemKey">Usa</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
           <Chart aspect={3/1} title="User spending (Last)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transaction</h1>

        <List/>
        </div>
      </div>
    </div>
  );
}
