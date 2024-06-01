import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UserList from "../List/UserList/UserList";
import UpdateList from "../List/UpdateList/UpdateList";
import DeleteList from "../List/DeleteList/DeleteList";
import SubmissionList from "../List/SubmissionList/SubmissionList";

const role = "ROLE_ADMIN";
const TaskCard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [openUserList, setOpenUserList] = useState(false);
  const handleCloseUserList = () => {
    setOpenUserList(false);
  };
  const handleOpenUserList = () => {
    setOpenUserList(true);
    handleMenuClose();
  };

  const [openSubmissionList, setSubmissionList] = useState(false);
  const handleCloseSubmissionList = () => {
    setSubmissionList(false);
  };
  const handleOpenSubmissionList = () => {
    setSubmissionList(true);
    handleMenuClose();
  };

  const [openUpdateList, setUpdateList] = useState(false);
  const handleCloseUpdateList = () => {
    setUpdateList(false);
  };
  const handleOpenUpdateTaskModel = () => {
    setUpdateList(true);
    handleMenuClose();
  };

  const [openDeleteList, setDeleteList] = useState(false);
  const handleCloseDeleteList = () => {
    setDeleteList(false);
  };
  const handleDeleteTask = () => {
    setDeleteList(true);
    handleMenuClose();
  };

  return (
    <div>
      <div className="card lg:flex justify-between">
        <div className="lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]">
          <div className="">
            <img
              className="lg:w-[7rem] lg:h-[7rem] object-cover"
              src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg"
              alt=""
            />
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <h1 className="font-bold text-lg ">Car Rental WebSite</h1>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequatur, at.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {[1, 1, 1, 1].map((item) => (
                <span className="py-1 px-5 rounded-full techStack">
                  React Js
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <IconButton
            id="demo-positioned-button"
            aria-controls={openMenu ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleMenuClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {role === "ROLE_ADMIN" ? (
              <>
                <MenuItem onClick={handleOpenUserList}>Assined User</MenuItem>
                <MenuItem onClick={handleOpenSubmissionList}>
                  See Submissions
                </MenuItem>
                <MenuItem onClick={handleOpenUpdateTaskModel}>Edit</MenuItem>
                <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
              </>
            ) : (
              <></>
            )}
          </Menu>
        </div>
      </div>
      <UserList open={openUserList} handleClose={handleCloseUserList} />
      <SubmissionList
        open={openSubmissionList}
        handleClose={handleCloseSubmissionList}
      />
      <UpdateList open={openUpdateList} handleClose={handleCloseUpdateList} />
      <DeleteList open={openDeleteList} handleClose={handleCloseDeleteList} />
    </div>
  );
};

export default TaskCard;
