import React from "react";
import { useLocation } from "react-router-dom";

const success = () => {
  const location = useLocation;
  console.log(location);
  return <div>successfully paid</div>;
};

export default success;
