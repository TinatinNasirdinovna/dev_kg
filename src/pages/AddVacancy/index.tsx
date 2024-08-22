import axios from "axios";
import React, { useState } from "react";
import { API } from "../../API";
import { useNavigate } from "react-router-dom";

const AddVacancy = () => {
  const nav = useNavigate()
  const [organization_name, setOrganizationName] = useState("");
  const [price_from, setPriceForm] = useState("");
  const [price_to, setPriceTo] = useState("");
  const [currency, setCurrency] = useState("");
  const [position, setPosition] = useState("");
  const [city, setCity] = useState("");
  const [salary, setSalary] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");

  const handleAddVacancy = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      organization_name &&
      price_from &&
      price_to &&
      currency &&
      position &&
      city &&
      salary &&
      phone &&
      type
    ) {
      try {
        const response = await axios.post(`${API}jobs`, {
          organization_name: organization_name,
          price_from: +price_from,
          price_to: +price_to,
          currency: currency,
          position: position,
          city: city,
          salary: salary,
          phone: phone,
          type: type,
          id: Math.random(),
          slug: "",
          created_at: "",
          updated_at: "",
          is_archived: true,
          gradient: 0,
          workday: "",
          organization_icon: "",
          organization_icon_formats: [null],
        });
        alert(response.data.message);
      } catch (error) {
        alert("Не удалось добавить вакансию");
      }
      nav('/vacancy')
    } else {
      alert("Please, fill the empty fields");
    }
   
  };

  return (
    <div id="addVacancy">
      <div className="container">
        <div className="addVacancy">
          <form className="addVacancy--form" onSubmit={handleAddVacancy}>
            <div className="addVacancy--form__cards">
              <label htmlFor="">
                Название организации
                <input
                  type="text"
                  placeholder=""
                  value={organization_name}
                  onChange={(e) => setOrganizationName(e.target.value)}
                />
              </label>
              <label htmlFor="">
                Название вакансии
                <input
                  type="text"
                  placeholder=""
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </label>
              <label htmlFor="">
                Место работы
                <input
                  type="text"
                  placeholder=""
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>
              <label htmlFor="">
                Уровень дохода
                <input
                  type="number"
                  placeholder="(price from)"
                  value={price_from}
                  onChange={(e) => setPriceForm(e.target.value)}
                />
              </label>
              <label htmlFor="">
                Уровень дохода
                <input
                  type="number"
                  value={price_to}
                  placeholder="(price to)"
                  onChange={(e) => setPriceTo(e.target.value)}
                />
              </label>
              <label htmlFor="">
                Оклад
                <select
                  id="type"
                  required
                  value={type}
                  onChange={(e) => setSalary(e.target.value)}
                >
                  <option value="" disabled>Выберите время зарплат</option>
                  <option value="monthly">Месяц</option>
                  <option value="week">Неделя</option>
                  <option value="in 10 day">10 день</option>
                </select>
              </label>
              <label htmlFor="">
                Валюта
                <input
                  type="text"
                  placeholder=""
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                />
              </label>
              <label htmlFor="">
                Общие условия
                <textarea placeholder="type something ..." />
              </label>
              <label htmlFor="">
                Телефон
                <input
                  type="text"
                  placeholder="+996 (707) 77 77 77 "
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <label htmlFor="type">Тип</label>
              <label htmlFor="">
                <select
                  id="type"
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="" disabled>
                    Выберите тип работы
                  </option>
                  <option value="full-time">Полная занятость</option>
                  <option value="part-time">Частичная занятость</option>
                  <option value="remote">Удаленная работа</option>
                </select>
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
