import React from "react";
import { useNavigate } from "react-router-dom";
import { IVacancyType } from "../../types";

const VacancyList = ({
  organization_name,
  jobTitle,
  paymentType,
  price_from,
  price_to,
  type,
  city,
  currency,
  salary,
}: IVacancyType) => {
  const nav = useNavigate();
  return (
    <div className="jobs-item content">
      <div className="jobs-item-field icon">
        <div className="preview images">
          <picture>
            <img
              src="https://devkg.com/images/organizations/886e28d889f4c24ea73c66b80174110f.webp"
              alt=""
            />
          </picture>
        </div>
      </div>
      <div className="information">
        <div
          className="jobs-item-field company"
          onClick={() => nav("/detailPosition")}
        >
          <span className="label">Компания</span>
          {organization_name}
        </div>
        <div
          className="jobs-item-field position"
          onClick={() => nav("/detailPosition")}
        >
          <span className="label">Должность</span>
          {jobTitle}
        </div>
        <div
          className="jobs-item-field price"
          onClick={() => nav("/detailPosition")}
        >
          <span className="label">Оклад</span>
          {`От ${price_from} в ${price_to} ${currency} ${salary} `}
        </div>
        <div
          className="jobs-item-field type"
          onClick={() => nav("/detailPosition")}
        >
          <span className="label">Тип</span>
          {`${type} / ${city}`}
        </div>
      </div>
    </div>
  );
};

export default VacancyList;
