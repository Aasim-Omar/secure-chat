import React from "react";
import { useHistory } from "react-router-dom";
import "./navbar.css";
import {
  FaAlignJustify,
  FaHome,
  FaHouseUser,
  FaSearch,
  FaSignOutAlt,
  FaTv,
  FaUsers,
} from "react-icons/fa";
import ICON from "../../assets/react.svg";

export default function Navbar({ user, setUser }) {
  let history = useHistory();

  const logout = () => {
    localStorage.setItem("user", null);
    setUser(null);
    history.push("/");
  };

  function toggleChatHeads() {
    const chatHeads = document.querySelector(".chat-heads");
    if (chatHeads) {
      chatHeads.style.display = chatHeads.style.display === "none" ? "block" : "none";
    }
  }

  return (
    <div className="navbar-container">
      {/* Left */}
      {user ? <div className="left-container"> <FaAlignJustify className='icon' color="#fff" onClick={toggleChatHeads} /> <div className="navbar-logo">SecureChat</div></div> : <div className="navbar-logo">SecureChat</div>}

      {/* Right */}
      <div>
        {user ? (
          <div>
            <div className="chat-head-item-navbar">
              <div>
                <p className="user-name">{user.email}</p>
                <div className="log-out-button" onClick={logout}>
                  <FaSignOutAlt />
                  Log out
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p className="navbar-text">Login to use chat.</p>
          </div>
        )}
      </div>
    </div>
  );
}
