import React from "react";

const AddVacancy = () => {
  return (
    <div id="addVacancy">
      <div className="container">
        <div className="addVacancy">
          <h1>Добавить вакансию</h1>
          <form className="addVacancy--form">
            <div className="addVacancy--form__cards">
                <label htmlFor="">
                  Название организации
                  <input type="text" placeholder="" />
                </label>
                <label htmlFor="">
                  Название вакансии
                  <input type="text" placeholder="" />
                </label>
                <label htmlFor="">
                  Место работы
                  <input type="text" placeholder="" />
                </label>
                <label htmlFor="">
                  Уровень дохода
                  <input type="text" placeholder="" />
                </label>
                <label htmlFor="">
                  Телефон
                  <input type="text" placeholder="" />
                </label>
                <label htmlFor="">
                  Email
                  <input type="text" placeholder="" />
                </label>      
                <label htmlFor="">
                  Общие условия
                  <textarea placeholder="type something ..." />
                </label>
            </div>
            <button type="submit">Добавить вакансию</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVacancy;
