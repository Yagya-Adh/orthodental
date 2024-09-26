import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";
import NavBarTabs from "../components/Nav/NavBarTabs";
import Footer from "../components/footer/Footer";
import FindersCard from "../components/finders/FindersCard";

const DefaultLayout = () => {
  return (
    <>
      <div className=" p-0 m-0 overflow-hidden relative bg-light-mainBackground">
        <NavBar />
        <div className=" max-w-screen-2xl mx-auto border-light-bordercolor10 border px-10"></div>
        <NavBarTabs />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
