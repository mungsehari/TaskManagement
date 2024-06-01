import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./Sidebar.css";
import CreateTaskCard from "../../pages/Task/TaskCard/CreateTaskCard";
import { useLocation, useNavigate } from "react-router-dom";

const menu = [
  { name: "Home", value: "Home", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "DONE", value: "DONE", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "ASSIGNED", value: "ASSIGNED", role: ["ROLE_ADMIN"] },
  { name: "NOT ASSIGNED", value: "PENDING", role: ["ROLE_ADMIN"] },
  { name: "Create New Task", value: "", role: ["ROLE_ADMIN"] },
  { name: "Notification", value: "NOTIFICATION", role: ["ROLE_CUSTOMER"] },
];

const role = "ROLE_ADMIN";
const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("DONE");
  const handleMenuChange = (item) => {
    const updatedParams = new URLSearchParams(location.search);
    if (item.name === "Create New Task") {
      handleOpenCreateTaskModel();
    } else if (item.name == "Home") {
      updatedParams.delete("fillter");
      const queryString = updatedParams.toString();
      const updatedPath = queryString
        ? `${location.pathname}?${queryString}`
        : location.pathname;
      navigate(updatedPath);
    } else {
      updatedParams.set("fillter", item.value);
      navigate(`${location.pathname}?${updatedParams.toString()}`);
    }
    setActiveMenu(item.name);
  };
  const handleLogout = () => {
    console.log("logout");
  };

  const [openCreateList, setCreateList] = useState(false);
  const handleCloseCreateList = () => {
    setCreateList(false);
  };
  const handleOpenCreateTaskModel = () => {
    setCreateList(true);
  };
  return (
    <>
      <div className="card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]">
        <div className="space-y-5 h-full">
          <div className="flex justify-center">
            <Avatar
              sx={{ width: "8rem", height: "8rem" }}
              className="border-2 border-[#c24dd0]"
              src="https://yt3.ggpht.com/hwNycQbQ3orVX2oEypVvgtbL5XzGfzRdAVErUIxtJF46NeUrjubUMynMVKUSa7_OfFmef1fo=s88-c-k-c0x00ffffff-no-rj"
            />
          </div>
          {menu
            .filter((item) => item.role.includes(role))
            .map((item) => (
              <p
                onClick={() => handleMenuChange(item)}
                className={`py-3 px-5 rounded-full text-center cursor-pointer ${
                  activeMenu === item.name ? "activeMenuItem" : "menuItem"
                }`}
              >
                {item.name}
              </p>
            ))}
          <Button
            onClick={handleLogout}
            sx={{ padding: ".7rem", borderRadius: "2rem" }}
            fullWidth
            className="logoutButton"
          >
            logout
          </Button>
        </div>
      </div>
      <CreateTaskCard
        open={openCreateList}
        handleClose={handleCloseCreateList}
      />
    </>
  );
};

export default Sidebar;
