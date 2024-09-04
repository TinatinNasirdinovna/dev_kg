import React, { useState } from "react";
import { LuBold } from "react-icons/lu";
import { FaItalic } from "react-icons/fa";
import { RiUnderline } from "react-icons/ri";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { toastMessage } from "../../utils";
import axios from "axios";
import { API } from "../../API";
import { useNavigate } from "react-router-dom";

interface OfflineProps {
  choosedFormat: boolean;
}

const Offline: React.FC<OfflineProps> = ({ choosedFormat }) => {
  const nav = useNavigate();
  const [eventsData, setEventsData] = useState({
    name: "",
    slug: "",
    location: "",
    date: "",
    event_type: "",
    button_type: "",
    organization_name: "",
    cover: "",
  });
  const {
    name,
    slug,
    location,
    event_type,
    button_type,
    organization_name,
    cover,
    date,
  } = eventsData;

  const handleGetDatas = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !name ||
      !slug ||
      !location  ||
      !date  ||
      !event_type  ||
      !button_type  ||
      !organization_name  ||
      !cover 
    ) {
      toastMessage(
        "error",
        "Please, fill the empty fields",
        "top-left",
        "dark",
        2000
      );
      return;
    }
    try {
      const response = await axios.post(`${API}events`, {
        id: Math.random(),
        name: name,
        cover: cover,
        slug: slug,
        location: location,
        created_at: "2024-05-28T08:57:14.533Z",
        updated_at: "2024-05-28T10:08:58.717Z",
        date: date,
        gradient: 27,
        event_type: event_type,
        button_type: button_type,
        organization_name: organization_name,
        cover_formats: [],
      });
      toastMessage(
        "success",
        response.data.message,
        "top-center",
        "colored",
        2000
      );
      setTimeout(() => {
        nav("/events");
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

  const getValues = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setEventsData({
      ...eventsData,
      [name]: value,
    });
  };

  return (
    <form
      className="off"
      onSubmit={handleGetDatas}
      style={{ display: choosedFormat ? "block" : "none" }}
    >
      <div className="off--img">
        <div className="off--img__img">
          <h3>Изображение</h3>
          <input value={cover} type="file" name="cover" onChange={getValues} />
        </div>
        <div className="off--img__img">
          <p>
            Тут можно загрузить фоновое изображение карточки для привлечения
            внимания.
          </p>
          <p>
            Не используйте изображения с текстом, вся необходимая информация
            будет добавлена автоматически.
          </p>
        </div>
      </div>
      <div className="off--org">
        <h3>
          Организация<span>*</span>
        </h3>
        <input
          type="text"
          name="organization_name"
          placeholder="Создать организацию"
          value={organization_name}
          onChange={getValues}
        />
      </div>
      <div className="off--title">
        <h3>
          Название<span>*</span>
        </h3>
        <div className="off--title__box">
          <input type="text" name="name" value={name} onChange={getValues} />
          <label htmlFor="">Например “Bishkek Dev Community Fest”</label>
        </div>
      </div>
      <div className="off--type">
        <h3>
          Тип<span>*</span>
        </h3>
        <select name="event_type" onChange={getValues}>
          <option value="онлайн">онлайн</option>
          <option value="оффлайн">оффлайн</option>
        </select>
      </div>
      <div className="off--description">
        <h3>
          Описание вакансии<span>*</span>
        </h3>
        <div className="off--description__box">
          <div className="off--description__box--left">
            <div className="off--description__box--left__icons">
              <span>
                <LuBold />
              </span>
              <span>
                <FaItalic />
              </span>
              <span>
                <RiUnderline />
              </span>
              <span>
                <MdOutlineFormatListNumbered />
              </span>
              <span>
                <MdOutlineFormatListBulleted />
              </span>
            </div>
            <textarea
              onChange={getValues}
              value={`The  ${organization_name}- компания по разработке программного обеспечения.
Основной деятельностью компании является проектирование, разработка цифровых сервисов и дизайн цифровых продуктов и сервисов, а именно серверной части, веб-сервисов, сайтов, мобильных приложений, ботов.
Занимаемся аутсорс и аутстафф направлением.`}
              name="slug"
            ></textarea>
            <p>
              Длина текста: 0 символов, минимально допустимое значение 200
              символов
            </p>
          </div>
          <label>
            Здесь вы можете описать мероприятие, что будет происходить, кто
            будет выступать, какие темы будут подняты.
          </label>
        </div>
      </div>
      <div className="off--date">
        <h3>
          Дата<span>*</span>
        </h3>
        <input type="date" name="date" value={date} onChange={getValues} />
      </div>
      <div className="off--date">
        <h3>
          Адрес<span>*</span>
        </h3>
        <input
          type="text"
          name="location"
          value={location}
          onChange={getValues}
        />
      </div>
      <div className="off--nameBtn">
        <h3>Имя кнопки</h3>
        <select name="button_type" id="" onChange={getValues}>
          <option value="Трансляция">Трансляция</option>
          <option value="Веб-сайт">Веб-сайт</option>
        </select>
      </div>
      <div className="off--date">
        <h3>Веб-сайт</h3>
        <input type="text"  />
      </div>
      <div className="off--date">
        <h3>Ссылка на регистрацию</h3>
        <input type="text" />
      </div>
      <button type="submit">Сохранить</button>
    </form>
  );
};

export default Offline;
