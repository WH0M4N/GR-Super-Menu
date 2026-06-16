import React from "react";
import Menues from "./Menues";

const HomePageContainer = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ fontSize: "20px", margin: "0" }}>!خوش اومدی</p>
      <p style={{ fontSize: "20px", margin: "0" }}>
        اول کدوم منو رو میخوای ببینی؟
      </p>
      <Menues />
    </div>
  );
};

export default HomePageContainer;
