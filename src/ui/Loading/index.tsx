import React from "react";
import load from "../../assets/images/loading.svg";

const Loading = () => {
  return (
    <div id="load">
      <div className="container">
        <div className="load">
          <img src={load} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
