import React from "react";
import { LuBold } from "react-icons/lu";
import { FaItalic } from "react-icons/fa";
import { RiUnderline } from "react-icons/ri";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";

const AddVacancy = () => {
  return (
    <div id="createVacancy">
      <div className="container">
        <div className="createVacancy">
          <h1>Добавить новую вакансию</h1>
          <p>
            Вакансия должна относится к сфере информационных технологий и будет
            опубликована после проверки модератором
          </p>
          <div className="createVacancy--organization">
            <h3>
              Организация<span>*</span>
            </h3>
            <input type="text" placeholder="Создать организацию" />
          </div>
          <div className="createVacancy--job">
            <h3>
              Должность<span>*</span>
            </h3>
            <div className="createVacancy">
              <input type="text" />
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
                <textarea name="" id=""></textarea>
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
            <h3>Skype</h3>
            <input type="text" />
          </div>
          <div className="createVacancy--skype">
            <h3>E-Mail</h3>
            <input type="text" />
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
              <select>
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
            <input type="text" />
          </div>
          <div className="createVacancy--salary">
            <h3>
              Оклад<span>*</span>
            </h3>
            <div className="createVacancy--salary__box">
              <select>
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
          <button>Сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default AddVacancy;

// import axios from "axios";
// import React, { useState } from "react";
// import { API } from "../../API";
// import { useNavigate } from "react-router-dom";

// const AddVacancy = () => {
//   const nav = useNavigate()
//   const [organization_name, setOrganizationName] = useState("");
//   const [price_from, setPriceForm] = useState("");
//   const [price_to, setPriceTo] = useState("");
//   const [currency, setCurrency] = useState("");
//   const [position, setPosition] = useState("");
//   const [city, setCity] = useState("");
//   const [salary, setSalary] = useState("");
//   const [phone, setPhone] = useState("");
//   const [type, setType] = useState("");

//   const handleAddVacancy = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (
//       organization_name &&
//       price_from &&
//       price_to &&
//       currency &&
//       position &&
//       city &&
//       salary &&
//       phone &&
//       type
//     ) {
//       try {
//         const response = await axios.post(`${API}jobs`, {
//           organization_name: organization_name,
//           price_from: +price_from,
//           price_to: +price_to,
//           currency: currency,
//           position: position,
//           city: city,
//           salary: salary,
//           phone: phone,
//           type: type,
//           id: Math.random(),
//           slug: "",
//           created_at: "",
//           updated_at: "",
//           is_archived: true,
//           gradient: 0,
//           workday: "",
//           organization_icon: "",
//           organization_icon_formats: [null],
//         });
//         alert(response.data.message);
//       } catch (error) {
//         alert("Не удалось добавить вакансию");
//       }
//       nav('/vacancy')
//     } else {
//       alert("Please, fill the empty fields");
//     }

//   };

//   return (
//     <div id="addVacancy">
//       <div className="container">
//         <div className="addVacancy">
//           <form className="addVacancy--form" onSubmit={handleAddVacancy}>
//             <div className="addVacancy--form__cards">
//               <label htmlFor="">
//                 Название организации
//                 <input
//                   type="text"
//                   placeholder=""
//                   value={organization_name}
//                   onChange={(e) => setOrganizationName(e.target.value)}
//                 />
//               </label>
//               <label htmlFor="">
//                 Название вакансии
//                 <input
//                   type="text"
//                   placeholder=""
//                   value={position}
//                   onChange={(e) => setPosition(e.target.value)}
//                 />
//               </label>
//               <label htmlFor="">
//                 Место работы
//                 <input
//                   type="text"
//                   placeholder=""
//                   value={city}
//                   onChange={(e) => setCity(e.target.value)}
//                 />
//               </label>
//               <label htmlFor="">
//                 Уровень дохода
//                 <input
//                   type="number"
//                   placeholder="(price from)"
//                   value={price_from}
//                   onChange={(e) => setPriceForm(e.target.value)}
//                 />
//               </label>
//               <label htmlFor="">
//                 Уровень дохода
//                 <input
//                   type="number"
//                   value={price_to}
//                   placeholder="(price to)"
//                   onChange={(e) => setPriceTo(e.target.value)}
//                 />
//               </label>
//               <label htmlFor="">
//                 Оклад
//                 <select
//                   id="type"
//                   required
//                   value={type}
//                   onChange={(e) => setSalary(e.target.value)}
//                 >
//                   <option value="" disabled>Выберите время зарплат</option>
//                   <option value="monthly">Месяц</option>
//                   <option value="week">Неделя</option>
//                   <option value="in 10 day">10 день</option>
//                 </select>
//               </label>
//               <label htmlFor="">
//                 Валюта
//                 <input
//                   type="text"
//                   placeholder=""
//                   value={currency}
//                   onChange={(e) => setCurrency(e.target.value)}
//                 />
//               </label>
//               <label htmlFor="">
//                 Общие условия
//                 <textarea placeholder="type something ..." />
//               </label>
//               <label htmlFor="">
//                 Телефон
//                 <input
//                   type="text"
//                   placeholder="+996 (707) 77 77 77 "
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//               </label>
//               <label htmlFor="type">Тип</label>
//               <label htmlFor="">
//                 <select
//                   id="type"
//                   required
//                   value={type}
//                   onChange={(e) => setType(e.target.value)}
//                 >
//                   <option value="" disabled>
//                     Выберите тип работы
//                   </option>
//                   <option value="full-time">Полная занятость</option>
//                   <option value="part-time">Частичная занятость</option>
//                   <option value="remote">Удаленная работа</option>
//                 </select>
//               </label>
//             </div>
//             <button type="submit">Добавить вакансию</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddVacancy;
