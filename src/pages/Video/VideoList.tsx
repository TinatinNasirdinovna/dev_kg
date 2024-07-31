import React from "react";
import { useNavigate } from "react-router-dom";
import { VideoTypes } from "../../types";

const VideoList = ({
  title,
  organization_name,
  date,
  cover_formats,
}: VideoTypes) => {
  const nav = useNavigate();

  const filtered = cover_formats[0]?.url;
  const date1 = new Date(date);
  const year = date1.getFullYear();
  const month = date1.toLocaleString("default", { month: "long" });
  const day = date1.getDate();

  return (
    <div className="video--cards__card" onClick={() => nav("/videoDetail")}>
      <h1>{title}</h1>
      <div className="video--cards__card--titles">
        <div className="video--cards__card--titles__title">
          <h3>Организатор</h3>
          <h2>{organization_name}</h2>
        </div>
        <div className="video--cards__card--titles__title">
          <h3>Когда</h3>
          <h2>
            {day} {month} {year}{" "}
          </h2>
        </div>
      </div>
      <div className="video--cards__card--img"></div>
      <img src={`${filtered}`} alt="img" />
    </div>
  );
};

export default VideoList;
