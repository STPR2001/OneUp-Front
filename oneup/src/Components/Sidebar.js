import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import "../App.css";

function Sidebar() {
  const sidebarData = [
    {
      title: "Home",
      icon: <HomeIcon />,
      link: "/home",
    },
    {
      title: "Reparaciones",
      icon: <HomeIcon />,
      link: "/reparaciones",
    },
    {
      title: "Clientes",
      icon: <HomeIcon />,
      link: "/clientes",
    },
    {
      title: "Repuestos",
      icon: <HomeIcon />,
      link: "/repuestos",
    },
    {
      title: "Proveedores",
      icon: <HomeIcon />,
      link: "/proveedores",
    },
    {
      title: "Compras",
      icon: <HomeIcon />,
      link: "/compras",
    },
  ];

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {sidebarData.map((item, index) => (
          <li
            key={index}
            className="row"
            onClick={() => {
              window.location.pathname = item.link;
            }}
          >
            <div className="icon">{item.icon}</div>
            <div className="title">{item.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
