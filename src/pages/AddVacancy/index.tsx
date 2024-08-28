import React, { useState } from "react";
import { LuBold } from "react-icons/lu";
import { FaItalic } from "react-icons/fa";
import { RiUnderline } from "react-icons/ri";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { API } from "../../API";
import { useNavigate } from "react-router-dom";

const AddVacancy = () => {
  const nav = useNavigate();
  const [vacancyData, setVacancyData] = useState({
    type: "", // done
    currency: "", // done
    price_from: "", // done
    price_to: "", // done
    position: "", // done
    city: "", // done
    salary: "", // done
    description: "", // done
    email: "", // done
    organization_name: "", // done
    organization_icon: "", // done
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let currentInput = e.target.name;
    setVacancyData({
      ...vacancyData,
      [currentInput]: e.target.value,
    });
  };

  const textareaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let currentInput = e.target.name;
    setVacancyData({
      ...vacancyData,
      [currentInput]: e.target.value,
    });
  };

  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let currentInput = e.target.name;
    setVacancyData({
      ...vacancyData,
      [currentInput]: e.target.value,
    });
  };

  const handleAddVacancy = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      vacancyData.city.trim() === "" ||
      vacancyData.email.trim() === "" ||
      vacancyData.organization_name.trim() === "" ||
      vacancyData.organization_icon.trim() === "" ||
      vacancyData.price_from.trim() === "" ||
      vacancyData.position.trim() === "" ||
      vacancyData.price_to.trim() === ""
    ) {
      toast.error("Please fill the empty fields!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    try {
      const response = await axios.post(`${API}jobs`, {
        type: vacancyData.type,
        slug: "",
        currency: vacancyData.currency,
        price_from: vacancyData.price_from,
        price_to: vacancyData.price_to,
        position: vacancyData.position,
        city: vacancyData.city,
        salary: vacancyData.salary,
        created_at: "2024-06-04T04:25:29.832Z",
        updated_at: "2024-06-07T11:23:06.614Z",
        is_archived: null,
        gradient: 23,
        workday: vacancyData.description,
        organization_name: vacancyData.organization_name,
        organization_icon: vacancyData.organization_icon,
        organization_icon_formats: [
          {
            type: "image/webp",
            url: vacancyData.organization_icon,
          },
        ],
      });
      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      alert("error");
    }
    setTimeout(() => {
      nav("/vacancy");
    }, 3000)
  };
  return (
    <div id="createVacancy">
      <div className="container">
        <form className="createVacancy" onSubmit={handleAddVacancy}>
          <h1>Добавить новую вакансию</h1>
          <p>
            Вакансия должна относится к сфере информационных технологий и будет
            опубликована после проверки модератором
          </p>
          <div className="createVacancy--organization">
            <h3>
              Организация<span>*</span>
            </h3>
            <input
              type="text"
              name="organization_name"
              placeholder="Создать организацию"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="createVacancy--job">
            <h3>
              Должность<span>*</span>
            </h3>
            <div className="createVacancy">
              <input
                type="text"
                name="position"
                onChange={inputChangeHandler}
              />
              <label htmlFor="">Например “Middle JavaScript Developer”</label>
            </div>
          </div>
          <div className="createVacancy--description">
            <h3>
              Описание вакансии<span>*</span>
            </h3>
            <div className="createVacancy--description__box">
              <div className="createVacancy--description__box--left">
                <div className="createVacancy--description__box--left__icons">
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
                  value={`The ${vacancyData.organization_name} - компания по разработке программного обеспечения.
Основной деятельностью компании является проектирование, разработка цифровых сервисов и дизайн цифровых продуктов и сервисов, а именно серверной части, веб-сервисов, сайтов, мобильных приложений, ботов.
Занимаемся аутсорс и аутстафф направлением.`}
                  name="description"
                  onChange={textareaChangeHandler}
                ></textarea>

                <p>
                  Длина текста: 0 символов, минимально допустимое значение 200
                  символов
                </p>
              </div>
              <div className="createVacancy--description__box--rigth">
                <label htmlFor="">
                  Здесь <span>необходимо</span> указать условия труда,
                  требования и обязанности. Также вы можете указать краткое
                  описание компании, например:
                </label>
                <label htmlFor="">
                  “В дружный отдел дизайна игровой студии ”Bloody Fun” требуется
                  проект менеджер со стажем”
                </label>
              </div>
            </div>
          </div>
          <div className="createVacancy--telegram">
            <h3>Telegram</h3>
            <div className="createVacancy--telegram__box">
              <input type="text" />
              <label>
                Не обязательно заполнять все поля для контактов. Например если у
                вас нет почты или вы не хотите оставлять свой телеграм, оставьте
                поле пустым.
              </label>
            </div>
          </div>
          <div className="createVacancy--skype">
            <h3>Ссылка логотипа организации</h3>
            <input
              type="text"
              name="organization_icon"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="createVacancy--skype">
            <h3>E-Mail</h3>
            <input type="text" name="email" onChange={inputChangeHandler} />
          </div>
          <div className="createVacancy--skype">
            <h3>Телефон</h3>
            <input type="text" />
          </div>
          <div className="createVacancy--type">
            <h3>
              Тип<span>*</span>
            </h3>
            <div className="reateVacancy--type__box">
              <select onChange={selectChangeHandler} name="type">
                <option value="Работа в офисе (только в Кыргызстан)">
                  Работа в офисе (только в Кыргызстан)
                </option>
                <option value="Разовая работа">Разовая работа</option>
                <option value="Удаленная работа (Remote)">
                  Удаленная работа (Remote)
                </option>
                <option value="Переезд (Работа за границей)">
                  Переезд (Работа за границей)
                </option>
                <option value="Стажировка (только Кыргызстан)"></option>
              </select>
              <label>
                Обязательное поле в котором вы можете выбрать тип работы для
                вашей вакансии.
              </label>
            </div>
          </div>
          <div className="createVacancy--skype">
            <h3>
              Город<span>*</span>
            </h3>
            <input type="text" name="city" onChange={inputChangeHandler} />
          </div>
          <div className="createVacancy--salary">
            <h3>
              Оклад<span>*</span>
            </h3>
            <div className="createVacancy--salary__box">
              <select name="salary" onChange={selectChangeHandler}>
                <option value="Фиксированный оплата за проект">
                  Фиксированный оплата за проект
                </option>
                <option value="Почасовая оплата">Почасовая оплата</option>
                <option value="Ежемесячный оклад">Ежемесячный оклад</option>
                <option value="Неоплачиваемая">Неоплачиваемая</option>
              </select>
              <label>
                Вилка зарплаты - обязательное поле. Это существенно увеличивает
                шанс отклика потенциального кандидата.
              </label>
            </div>
          </div>
          <div className="createVacancy--price">
            <div className="createVacancy--price__box">
              <input
                type="number"
                placeholder="От*"
                name="price_from"
                onChange={inputChangeHandler}
              />
              <input
                type="number"
                placeholder="До"
                name="price_to"
                onChange={inputChangeHandler}
              />
              <select name="currency" onChange={selectChangeHandler}>
                <option value="KGS">KGS</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="RUB">RUB</option>
              </select>
            </div>
          </div>
          <button type="submit">Сохранить</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddVacancy;
