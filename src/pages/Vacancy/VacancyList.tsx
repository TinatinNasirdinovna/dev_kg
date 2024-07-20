
import React from "react";
import { useNavigate } from "react-router-dom";

const VacancyList = ({
    companyName = '',
    jobTitle = '',
    paymentType = '',
    priceFrom = 0,
    priceTo = 0,
    type = '',
    city = '',
    currency = '',
    salary = ''
} : {
    companyName: string;
    jobTitle: string;
    paymentType: string;
    priceFrom: number;
    priceTo: number;
    type: string;
    city: string;
    currency: string;
    salary: string
}) => {
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
          {companyName}
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
         { `От ${priceFrom} в ${priceTo} ${currency} ${salary} `}
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

