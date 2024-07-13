import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Vacancies = () => {
  const nav = useNavigate();
  return (
    <>
      <div id="vacancies">
        <div className="container">
          <div className="vacancies">
            <div className="vacancies__content">
              <div className="filter">
                <Link to={"/"}>
                  <button>Добавить вакансию</button>
                </Link>
              </div>
              <div className="jobs-list">
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
                      Validon Agency
                    </div>
                    <div className="jobs-item-field position" onClick={() => nav("/detailPosition")}>
                      <span className="label">Должность</span>
                      Нr менеджер
                    </div>
                    <div
                      className="jobs-item-field price"
                      onClick={() => nav("/detailPosition")}
                    >
                      <span className="label">Оклад</span>
                      От 60000 RUB в месяц
                    </div>
                    <div
                      className="jobs-item-field type"
                      onClick={() => nav("/detailPosition")}
                    >
                      <span className="label">Тип</span>
                      Удаленная работа
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vacancies;