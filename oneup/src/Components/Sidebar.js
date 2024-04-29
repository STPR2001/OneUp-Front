import React from "react";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AppSettingsAltRoundedIcon from "@mui/icons-material/AppSettingsAltRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import "../App.css";

function Sidebar() {
  const sidebarData = [
    {
      title: "Home",
      icon: <DashboardRoundedIcon />,
      link: "/home",
    },
    {
      title: "Reparaciones",
      icon: <BuildRoundedIcon />,
      link: "/reparaciones",
    },
    {
      title: "Clientes",
      icon: <PeopleAltRoundedIcon />,
      link: "/clientes",
    },
    {
      title: "Repuestos",
      icon: <AppSettingsAltRoundedIcon />,
      link: "/repuestos",
    },
    {
      title: "Proveedores",
      icon: <PersonRoundedIcon />,
      link: "/proveedores",
    },
    {
      title: "Técnicos",
      icon: <EngineeringRoundedIcon />,
      link: "/tecnicos",
    },
    {
      title: "Compras",
      icon: <ShopTwoIcon />,
      link: "/compras",
    },
    {
      title: "Estadísticas",
      icon: <AssessmentRoundedIcon />,
      link: "/estadisticas",
    },
    {
      title: "Configuración",
      icon: <SettingsRoundedIcon />,
      link: "/configuracion",
    },
    {
      title: "Cerrar sesión",
      icon: <LogoutRoundedIcon />,
      link: "/login",
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
