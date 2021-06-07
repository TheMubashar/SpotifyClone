import React from "react";
import "./SidebarOption.css";

function SidebarOption({ tilte, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{tilte}</h4> : <p>{tilte}</p>}
    </div>
  );
}

export default SidebarOption;
