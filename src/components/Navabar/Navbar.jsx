import { Avatar } from "@mui/material";
import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="sticky bgColor left-0 right-0 top-0 h-14 w-screen">
      <div className="container h-full mx-auto flex items-center justify-between overflow-hidden flex-row">
        <p className="font-bold text-lg ">mitraYT Task manager</p>
        <div className="flex items-center gap-5">
          <p>mitraYT</p>
          <Avatar
            className="bg-[#c24dd0]"
            src="https://yt3.ggpht.com/hwNycQbQ3orVX2oEypVvgtbL5XzGfzRdAVErUIxtJF46NeUrjubUMynMVKUSa7_OfFmef1fo=s88-c-k-c0x00ffffff-no-rj"
          >
            H
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
