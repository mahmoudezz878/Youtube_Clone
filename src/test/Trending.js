import React from "react";
import Recommendedvideos from "../Compnents/Recommendedvideos";
import Sidebar from "../Compnents/Sidebar";
import "./trending.css";
import { useParams } from "react-router";

function Trending({active, darkmode}) {
  let { page } = useParams();

  return (
    <div className="trending">
      <Sidebar active={active} />
      <Recommendedvideos darkmode={darkmode} name={page} />
    </div>
  );
}

export default Trending;
