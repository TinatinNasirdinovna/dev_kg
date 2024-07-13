import React from "react";
import { useNavigate } from "react-router-dom";


const Organizations = () => {

const nav = useNavigate()

  return (
    <div id="organizations">
      <div className="container">
        <div className="organizations">
          <div className="organizations--cards">
            <div className="organizations--cards__card">
              <div className="organizations--cards__card--title">
                <img src="https://devkg.com/images/organizations/c0814e899a66d41ede3aad818e921946.webp" alt="img" />
                <div className="organizations--cards__card--title__company">
                  <h3>Компания</h3>
                  <h2 onClick={() => nav('/detail')}>The Palm</h2>
                </div>
              </div>
              <div className="organizations--cards__card--about">
                <div className="organizations--cards__card--about__block">
                  <h3>Вакансии</h3>
                  <h2>519</h2>
                </div>
                <div className="organizations--cards__card--about__block">
                  <h3>Мероприятия</h3>
                  <h2>1</h2>
                </div>
                <div className="organizations--cards__card--about__block">
                  <h3>Видео</h3>
                  <h2>0</h2>
                </div>
              </div>
            </div>
            <div className="organizations--cards__card">
              <div className="organizations--cards__card--title">
                <img src="https://devkg.com/images/organizations/c0814e899a66d41ede3aad818e921946.webp" alt="img" />
                <div className="organizations--cards__card--title__company">
                  <h3>Компания</h3>
                  <h2 onClick={() => nav('/detail')}>The Palm</h2>
                </div>
              </div>
              <div className="organizations--cards__card--about">
                <div className="organizations--cards__card--about__block">
                  <h3>Вакансии</h3>
                  <h2>519</h2>
                </div>
                <div className="organizations--cards__card--about__block">
                  <h3>Мероприятия</h3>
                  <h2>1</h2>
                </div>
                <div className="organizations--cards__card--about__block">
                  <h3>Видео</h3>
                  <h2>0</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Organizations;
