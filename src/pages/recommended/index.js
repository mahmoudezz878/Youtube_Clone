import React, { useContext } from "react";
import Header from "../../Compnents/Header";
import Sidebar from "../../Compnents/Sidebar";
import Recommendedvideos from "../../Compnents/Recommendedvideos";
import Smallsidebar from './../../Compnents/smallsidebar/Smallsidebar';

const RecommendedPage = () => {
  return (
    <>
      <Header />
      <div className="app__page">
        <Sidebar />
        <Smallsidebar />
        <Recommendedvideos />
      </div>
    </>
  );
};

export default RecommendedPage;