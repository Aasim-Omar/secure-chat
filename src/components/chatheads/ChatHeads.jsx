import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import "./chatheads.css";

export default function ChatHeads({ items, setReceiver }) {
  function toggleChatHeads() {
    const chatHeads = document.querySelector(".chat-heads");
    if (chatHeads) {
      chatHeads.style.display = chatHeads.style.display === "none" ? "block" : "none";
    }
  }
  function handleChatHeadClick(obj) {
    setReceiver(obj);
    if (window.innerWidth < 768) {
      toggleChatHeads();
    }
  }
  function hideChatHeads() {
    const chatHeads = document.querySelector(".chat-heads");
    if (chatHeads) {
      chatHeads.style.display = "none";
    }
  }
  return (
    <div className="chat-heads">
        <p className="conversations-header"><FaAlignJustify className="icon" onClick={hideChatHeads}/>Conversations</p>
      <input className="chat-heads-search" placeholder="Search in Messenger" />
      <div className="chat-heads-container">
        {items.map((obj, i) => (
          <div
            key={i}
            className="chat-head-item"
            onClick={() => handleChatHeadClick(obj)}
          >
            <div className="user-profile-pic-container">
              <p className="user-profile-pic-text">{obj.email[0]}</p>
            </div>
            <p>{obj.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
