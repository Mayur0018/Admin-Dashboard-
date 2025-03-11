import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Orders
import LocalShippingIcon from "@mui/icons-material/LocalShipping"; // Delivery
import BarChartIcon from "@mui/icons-material/BarChart"; // Stats
import NotificationsIcon from "@mui/icons-material/Notifications"; // Notifications
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark"; // Logos
import SettingsIcon from "@mui/icons-material/Settings"; // Settings
import LogoutIcon from "@mui/icons-material/Logout";
import GroupsIcon from "@mui/icons-material/Groups"; // Users Icon
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety"; // System Health Icon

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Mayur Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">List</p>

          <li>
            <GroupsIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <StorefrontIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <ShoppingCartIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon " />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>

          <li>
            <BarChartIcon className="icon" />
            <span>Stats</span>
          </li>

          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">Service</p>

          <li>
            <HealthAndSafetyIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <BrandingWatermarkIcon className="icon" />
            <span>Logos</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USERS</p>

          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>LogOut</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
}
