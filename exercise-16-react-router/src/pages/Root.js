import React from "react";
import { Outlet } from "react-router-dom"; //Where childrens will be displayed
import MainNavigation from "../components/MainNavigation";


const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
