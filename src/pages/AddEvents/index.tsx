import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../API";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddEvents = () => {
  const nav = useNavigate();
  const [organization_name, setOrganizationName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");

  const messageAlert = (mess: string) =>
    toast(mess, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleAddEvents = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!organization_name && !location && !date && !name) {
      messageAlert("Please, fill the empty fields");
      return;
    }
    try {
      const response = await axios.post(`${API}events`, {
        id: Math.random(),
        name: name,
        cover: null,
        slug: name,
        location: location,
        created_at: date,
        updated_at: date,
        date: new Date(date),
        gradient: 27,
        event_type: "offline",
        button_type: "website",
        organization_name: organization_name,
        cover_formats: [],
      });
      messageAlert(response.data.message);
    } catch (err) {
      messageAlert("Не удалось добавить мероприятию");
    }
    nav("/events");
  };

  return (
    <div id="addVacancy">
      <div className="container">
        <div className="addVacancy">
          <form className="addVacancy--form" onSubmit={handleAddEvents}>
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
                Тема мероприятиe
                <input
                  type="text"
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label htmlFor="">
                Место мероприятиe
                <input
                  type="text"
                  placeholder=""
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </label>
              <label htmlFor="">
                Дата мероприятиe
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>
            </div>
            <button type="submit">Добавить вакансию</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddEvents;
