import React from "react";

const AddEvents = () => {
  return (
    <div id="addEvents">
      <div className="container">
        <div className="addEvents" style={{ width: "100vh" }}>
          <h1>Добавить новое мероприятие</h1>
          <p>
            Мероприятие будет опубликовано на сайте и в телеграм канале после
            проверки модератором. Мероприятия откровенно рекламного характера
            или не связанные с IT и смежными темами будут отклоненны.
          </p>
          <h2>Необходимо выбрать тип</h2>
          <div className="addEvents--off">
            <img
              src="https://devkg.com/js/img/not-found-events.b4ad3d2.svg"
              alt="img"
            />
            <div className="addEvents--off__text">
              <h3> Оффлайн мероприятие</h3>
              <p>
                Если мероприятие планируется в режиме оффлайн, то можете выбрать
                данный тип.
              </p>
            </div>
          </div>
          <div className="addEvents--off">
            <img
              src="https://devkg.com/js/img/not-found-lives.9b8fa4b.svg"
              alt="img"
            />
            <h3>Онлайн мероприятие</h3>
            <p>
              Если планируете провести мероприятие в режиме онлайн, то нужно
              выбрать данный тип.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvents;

// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { API } from "../../API";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AddEvents = () => {
//   const nav = useNavigate();

//   const [eventState, setEventState] = useState({
//     organization_name: '',
//     location:'',
//     date: '',
//     name: '',
//   })

//   const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
//     let currentInput  = e.target.name
//     setEventState({
//       ...eventState,
//       [currentInput]: e.target.value
//     })
//   }

//   const messageAlert = (mess: string) =>
//     toast(mess, {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });

//   const handleAddEvents = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!eventState.organization_name && !eventState.location && !eventState.date && !eventState.name) {
//       messageAlert("Please, fill the empty fields");
//       return;
//     }
//     try {
//       const response = await axios.post(`${API}events`, {
//         id: Math.random(),
//         name: eventState.name,
//         cover: null,
//         slug: eventState.name,
//         location: eventState.location,
//         created_at: eventState.date,
//         updated_at: eventState.date,
//         date: new Date(eventState.date),
//         gradient: 27,
//         event_type: "offline",
//         button_type: "website",
//         organization_name: eventState.organization_name,
//         cover_formats: [],
//       });
//       messageAlert(response.data.message);
//     } catch (err) {
//       messageAlert("Не удалось добавить мероприятию");
//     }
//     nav("/events");
//   };

//   return (
//     <div id="addVacancy">
//       <div className="container">
//         <div className="addVacancy">
//           <form className="addVacancy--form" onSubmit={handleAddEvents}>
//             <div className="addVacancy--form__cards">
//               <label htmlFor="">
//                 Название организации
//                 <input
//                   type="text"
//                   name="organization_name"
//                   placeholder=""
//                   value={eventState.organization_name}
//                   onChange={inputChangeHandler}
//                 />
//               </label>
//               <label htmlFor="">
//                 Тема мероприятиe
//                 <input
//                   type="text"
//                   placeholder=""
//                   value={eventState.name}
//                   name="name"
//                   onChange={inputChangeHandler}
//                 />
//               </label>
//               <label htmlFor="">
//                 Место мероприятиe
//                 <input
//                   type="text"
//                   placeholder=""
//                   value={eventState.location}
//                   name="location"
//                   onChange={ inputChangeHandler}
//                 />
//               </label>
//               <label htmlFor="">
//                 Дата мероприятиe
//                 <input
//                   type="date"
//                   value={eventState.date}
//                   name="date"
//                   onChange={inputChangeHandler}
//                 />
//               </label>
//             </div>
//             <button type="submit">Добавить вакансию</button>
//           </form>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AddEvents;
