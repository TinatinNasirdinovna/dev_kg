import React, { useState } from "react";
import { toastMessage } from "../../utils";
import axios from "axios";
import { API } from "../../API";
import { useNavigate } from "react-router-dom";

const AddVideo = () => {
  const nav = useNavigate();
  const [videoData, setVideoData] = useState({
    title: '',
    cover: '',
    date: '',
    organization_name: ''
  });

  const {title,  cover, date, organization_name} = videoData
  const inputChangeeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement 
    >
  ) => {
    const { name, value } = e.target;
    setVideoData({
      ...videoData,
      [name]: value,
    });
  };

  const handleAddEvents = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
     !title || !cover || !date || !organization_name 
    ) {
      toastMessage(
        "error",
        "Please, fill the empty fields!",
        "top-left",
        "colored",
        2000
      );
      return;
    }
    try {
      const response = await axios.post(`${API}meetups`, {
        id: Math.random(),
        title: title,
        cover: cover,
        slug: "string",
        date: date,
        created_at: "2024-09-04T08:44:37.272Z",
        updated_at: "2024-09-04T08:44:37.272Z",
        gradient: 0,
        organization_name: organization_name,
        cover_formats: [
          {
            type: "string",
            url: cover,
          },
        ],
      });
      toastMessage(
        "success",
        response.data.message,
        "top-center",
        "colored",
        2000
      );
      setTimeout(() => {
        nav("/video");
      }, 3000);
    } catch (error: any) {
      toastMessage(
        "error",
        error.response.data.message,
        "top-right",
        "dark",
        2000
      );
    }
  };

  return (
    <div id="addVideo">
      <div className="container">
        <form className="addVideo" onSubmit={handleAddEvents}>
          <h1>Добавить новое видео</h1>
          <p className="addVideo--paragraph">
            Видео будет опубликованно на сайте и в телеграм канале после
            проверки модератором. Трансляции и видео откровенно рекламного
            характера или не связанные с IT и смежными темами будут отклоненны.
          </p>
          <div className="addVideo--img">
            <div className="addVideo--img__img">
              <h3>Изображение</h3>
              <input type="text" name="cover" onChange={inputChangeeHandler} />
            </div>
            <p>
              Тут можно загрузить фоновое изображение карточки для привлечения
              внимания. <br />
              <br /> Не используйте изображения с текстом, вся необходимая
              информация будет добавлена автоматически.
            </p>
          </div>
          <div className="addVideo--title">
            <h3>
            Дата<span>*</span>
            </h3>
            <div className="addVideo--title__box">
              <input type="date" name="date" onChange={inputChangeeHandler} />
            </div>
          </div>
          <div className="addVideo--organizations">
            <h3>
              Организация<span>*</span>
            </h3>
            <input
              type="text"
              name="organization_name"
              onChange={inputChangeeHandler}
              className="addVideo--organizations__input"
            />
          </div>
          <div className="addVideo--title">
            <h3>Название*</h3>
            <div className="addVideo--title__box">
              <input type="text" name="title" onChange={inputChangeeHandler} />
              <label htmlFor="">Например “Meetup #1: ML in production”</label>
            </div>
          </div>
          <div className="addVideo--title">
            <h3>
              Описание<span>*</span>
            </h3>
            <div className="addVideo--title__box">
              <input type="text" onChange={inputChangeeHandler} />
              <label htmlFor="">
                Здесь вы можете описать видео, что будет происходить, кто будет
                выступать, какие темы будут подняты.
              </label>
            </div>
          </div>
          <div className="addVideo--title">
            <h3>
              Ссылка на YouTube или ID ролика<span>*</span>
            </h3>
            <div className="addVideo--title__box">
              <input type="text" onChange={inputChangeeHandler} />
              <label htmlFor="">
                Вся мета информация будет взята из ролика. Если планируете
                трансляцию наперед создайте ее на YouTube и добавьте ссылку тут.
              </label>
            </div>
          </div>
          <button type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  );
};

export default AddVideo;
