import React from "react";
import { Link } from "react-router-dom";

const Vacancy = () => {
  return (
    <div id="vacansies">
      <div className="vacansies">
        <div className="btn">
          <button>Дабавить вакасию</button>
        </div>
      </div>
      <div className="bloc">
        <Link to={"/"}>
          <div className="text-nav">
            <h4>
              Компония{" "}
              <span>
                OcOO "Грин Телеком <br /> Сервис" (O!Dengi)
              </span>
            </h4>
            <h4>
              Должность <span>Дата инженер</span>
            </h4>
            <h4>
              Оклад <span>От 90000 KGS в месяц</span>
            </h4>
            <h4>
              Тип <span>Офис / Бишкек</span>
            </h4>
          </div>
        </Link>
        <div className="image">
          <img
            data-v-7ad410c8=""
            src="https://devkg.com/images/organizations/dbbbb77228b5c8b9b905267da3208e0d.png"
            alt="img"
          />
        </div>
      </div>

      <div className="bloc2">
        <Link to={"/"}>
          <div className="text-nav2">
            <h4>
              Компония{" "}
              <span>
                OcOO "Грин Телеком <br /> Сервис" (O!Dengi)
              </span>
            </h4>
            <h4>
              Должность <span>Дата инженер</span>
            </h4>
            <h4>
              Оклад <span>От 90000 KGS в месяц</span>
            </h4>
            <h4>
              Тип <span>Офис / Бишкек</span>
            </h4>
          </div>
        </Link>
        <div className="image2">
          <img
            data-v-7ad410c8=""
            src="https://devkg.com/images/organizations/63605c9e69fa303f894121357cf84e2a.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
