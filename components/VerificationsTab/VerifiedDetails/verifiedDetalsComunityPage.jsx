import React, { useState } from "react";
import DashboardLeftMenu from "../../AdminLeftMenu";
import Home from "../../../styles/Home.module.css";
import Header from "../../Header";
import VerificationDetailsBodySec from "./verificationDetailBodySec"
import { useSelector } from "react-redux";

const VerifiedDetalCommunityMainPage = () => {
  const mangUserMenu = useSelector(
    (state) => state.allGernalFunction.mangUserMenu
  );

  return (
    <>
      <div className={Home.main_container}>
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <DashboardLeftMenu />
          </div>
          <div className={Home.centerView}>
            <Header />
    
            <VerificationDetailsBodySec/>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifiedDetalCommunityMainPage;
