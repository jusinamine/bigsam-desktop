import React from "react";
const { ipcRenderer } = window.require("electron");

export default function TopBar({ settings }) {
  return (
    <div
      className="top-bar"
      style={{
        height: "40px",
        width: "100%",
        direction: "rtl",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          className="topbar-icon"
          version="1.1"
          viewBox="0 0 492 492"
          xmlSpace="preserve"
          onClick={() => ipcRenderer.send("app-quit")}
        >
          <path d="M300.188 246L484.14 62.04c5.06-5.064 7.852-11.82 7.86-19.024 0-7.208-2.792-13.972-7.86-19.028L468.02 7.872C462.952 2.796 456.196.016 448.984.016c-7.2 0-13.956 2.78-19.024 7.856L246.008 191.82 62.048 7.872C56.988 2.796 50.228.016 43.02.016c-7.2 0-13.96 2.78-19.02 7.856L7.872 23.988c-10.496 10.496-10.496 27.568 0 38.052L191.828 246 7.872 429.952C2.808 435.024.02 441.78.02 448.984c0 7.204 2.788 13.96 7.852 19.028l16.124 16.116c5.06 5.072 11.824 7.856 19.02 7.856 7.208 0 13.968-2.784 19.028-7.856l183.96-183.952 183.952 183.952c5.068 5.072 11.824 7.856 19.024 7.856h.008c7.204 0 13.96-2.784 19.028-7.856l16.12-16.116c5.06-5.064 7.852-11.824 7.852-19.028 0-7.204-2.792-13.96-7.852-19.028L300.188 246z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          className="topbar-icon"
          version="1.1"
          viewBox="0 0 409.6 409.6"
          xmlSpace="preserve"
          onClick={() => ipcRenderer.send("app-minimize")}
        >
          <path d="M392.533 187.733H17.067C7.641 187.733 0 195.374 0 204.8s7.641 17.067 17.067 17.067h375.467c9.426 0 17.067-7.641 17.067-17.067s-7.642-17.067-17.068-17.067z"></path>
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 512 512"
          version="1.1"
          viewBox="0 0 512 512"
          style={{ fill: settings.showSettings ? "#e31c25" : "#fff" }}
          className="topbar-icon"
          xmlSpace="preserve"
          onClick={() => settings.setShowSettings(!settings.showSettings)}
        >
          <path d="M496.659 312.107l-47.061-36.8c.597-5.675 1.109-12.309 1.109-19.328s-.491-13.653-1.109-19.328l47.104-36.821c8.747-6.912 11.136-19.179 5.568-29.397L453.331 85.76c-5.227-9.557-16.683-14.464-28.309-10.176l-55.531 22.293c-10.645-7.68-21.803-14.165-33.344-19.349l-8.448-58.901C326.312 8.448 316.584 0 305.086 0h-98.133c-11.499 0-21.205 8.448-22.571 19.456l-8.469 59.115c-11.179 5.035-22.165 11.435-33.28 19.349l-55.68-22.357c-10.433-4.032-22.913.49-28.097 10.005L9.854 170.347c-5.781 9.771-3.392 22.464 5.547 29.547l47.061 36.8c-.747 7.189-1.109 13.44-1.109 19.307s.363 12.117 1.109 19.328L15.358 312.15c-8.747 6.933-11.115 19.2-5.547 29.397l48.939 84.672c5.227 9.536 16.576 14.485 28.309 10.176l55.531-22.293c10.624 7.659 21.781 14.144 33.323 19.349l8.448 58.88C185.747 503.552 195.454 512 206.974 512h98.133c11.499 0 21.227-8.448 22.592-19.456l8.469-59.093c11.179-5.056 22.144-11.435 33.28-19.371l55.68 22.357a22.924 22.924 0 008.363 1.579c8.277 0 15.893-4.523 19.733-11.563l49.152-85.12c5.462-9.984 3.072-22.25-5.717-29.226zm-240.64 29.226c-47.061 0-85.333-38.272-85.333-85.333s38.272-85.333 85.333-85.333 85.333 38.272 85.333 85.333-38.272 85.333-85.333 85.333z"></path>
        </svg>
      </div>
    </div>
  );
}