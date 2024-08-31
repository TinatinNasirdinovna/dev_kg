import React from "react";
import Offline from "./Offline";

const AddEvents = () => {
  return (
    <div id="addEvents">
      <div className="container">
        <div className="addEvents">
          <h1>Добавить новое мероприятие</h1>
          <p>
            Мероприятие будет опубликовано на сайте и в телеграм канале после
            проверки модератором. Мероприятия откровенно рекламного характера
            или не связанные с IT и смежными темами будут отклоненны.
          </p>
          <h2>Необходимо выбрать тип</h2>
          <div className="addEvents--cards">
            <div className="addEvents--cards__off">
              <div className="addEvents--cards__off--img">
                <img
                src="https://devkg.com/js/img/not-found-events.b4ad3d2.svg"
                alt="img"
              />
              </div>
              <div className="addEvents--cards__off--text">
                <h3> Оффлайн мероприятие</h3>
                <p>
                  Если мероприятие планируется в режиме оффлайн, то можете
                  выбрать данный тип.
                </p>
              </div>
            </div>
            <div className="addEvents--cards__off">
              <div className="addEvents--cards__off--img">
                <img
                src="https://devkg.com/js/img/not-found-lives.9b8fa4b.svg"
                alt="img"
              />
              </div>
              <div className="addEvents--cards__off--text">
                <h3>Онлайн мероприятие</h3>
                <p>
                  Если планируете провести мероприятие в режиме онлайн, то нужно
                  выбрать данный тип.
                </p>
              </div>
            </div>
          </div>
          <Offline/>
        </div>
      </div>
    </div>
  );
};

export default AddEvents;
