import React, { useState } from "react";
import DashboardLeftMenu from "../../AdminLeftMenu";
import Home from "../../../styles/Home.module.css";
import Header from "../../Header";
import { useSelector } from "react-redux";
import ReportDetailBodySec from "./reportDetailBodySec";

const ReportDetailMainPage = () => {
  return (
    <>
      <div className={Home.main_container}>
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <DashboardLeftMenu />
          </div>
          <div className={Home.centerView}>
            <Header />

            <ReportDetailBodySec />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportDetailMainPage;
