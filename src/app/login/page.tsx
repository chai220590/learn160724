"use client";

import React, { useState } from "react";
import LoginComponent from "./LoginComponent";
import ToDoComponent from "./ToDoComponent";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// input
// button
// table
// array
// array.map
// array.filer
// array.foreach

function page() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <FontAwesomeIcon icon={"fas face-hand-over-mouth"} />
      {isLogin === true ? (
        <ToDoComponent />
      ) : (
        <LoginComponent setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

export default page;
