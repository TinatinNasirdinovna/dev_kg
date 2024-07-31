import React from "react";
import { useNavigate } from "react-router-dom";
import { IOrganizationTypes } from "../../types";

const OrganizationList = ({
  name,
  jobs_count,
  meetups_count,
  events_count,
}: IOrganizationTypes) => {
  const nav = useNavigate();
  return (
    <div className="organizations--cards__card">
      <div className="organizations--cards__card--title">
        <img
          src="https://devkg.com/images/organizations/c0814e899a66d41ede3aad818e921946.webp"
          alt="img"
        />
        <div className="organizations--cards__card--title__company">
          <h3>Компания</h3>
          <h2 onClick={() => nav("/detail")}>{name}</h2>
        </div>
      </div>
      <div className="organizations--cards__card--about">
        <div className="organizations--cards__card--about__block">
          <h3>Вакансии</h3>
          <h2>{jobs_count}</h2>
        </div>
        <div className="organizations--cards__card--about__block">
          <h3>Мероприятия</h3>
          <h2>{meetups_count}</h2>
        </div>
        <div className="organizations--cards__card--about__block">
          <h3>Видео</h3>
          <h2>{events_count}</h2>
        </div>
      </div>
    </div>
  );
};

export default OrganizationList;
