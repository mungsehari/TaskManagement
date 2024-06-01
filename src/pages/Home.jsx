import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import TaskList from "./Task/List/TaskList/TaskList";

const Home = () => {
  return (
    <div className="flex w-screen overflow-hidden m-5">
      <div className="hidden lg:block w-[25vw] relative">
        <Sidebar />
      </div>
      <div className="right-side-part w-full flex justify-center mb-10 ">
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
