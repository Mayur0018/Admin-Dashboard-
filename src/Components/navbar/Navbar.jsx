import React from "react";
import SearchIcon from "@mui/icons-material/Search"; // Search Icon
import LanguageIcon from "@mui/icons-material/Language"; // Language Icon
import DarkModeIcon from "@mui/icons-material/DarkMode"; // Dark Mode
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit"; // Fullscreen Exit
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"; // Notification (None)
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"; // Chat Button Outline
import ListIcon from "@mui/icons-material/List"; // List Outline
import "./navbar.scss";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="iteams">
          <div className="iteam">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="iteam">
            <DarkModeIcon className="icon" />
          </div>
          <div className="iteam">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="iteam">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="iteam">
            <ChatBubbleOutlineIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="iteam">
            <ListIcon className="icon" />
          </div>
          <div className="iteam">
            <img
              src="https://images.pexels.com/photos/5005240/pexels-photo-5005240.jpeg"
              alt="Orange and White Tabby Cat"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
