import React from "react";

const Hero = () => {
  return (
    <>
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero--events">
            <h1>Последние мероприятия</h1>
            <div className="hero--events__block">
              <div className="hero--events__block--foto">
                <img
                  src="https://devkg.com/images/events/e975ab09a375897590241aaec11d51fa.png"
                  data-v-17b3db24="img"
                />
                <div className="hero--events__block--foto__text">
                  <h4>
                    25 августа 2024 <span>17:00</span>
                  </h4>
                  <h1>InkubasiaLAB 2024’s Machine Learning AI Bootcamp</h1>
                  <div className="hero--events__block--foto__text--par">
                    <div className="hero--events__block--foto__text--par__kor1">
                      <h6>Организатор</h6>
                      <h2>InkubasiaLAB</h2>
                    </div>
                    <div className="hero--events__block--foto__text--par__kor1">
                      <h6>Когда</h6>
                      <h2>Коворкинг-резорт ololoAkJol</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero--vacancy">
            <h1>Последние вакансии</h1>
            <div className="hero--vacancy__blocks">
              <div className="hero--vacancy__blocks--block">
                <img
                  src="https://devkg.com/images/organizations/36d2730970ee88fc351b61b2ea4ab182.webp"
                  alt="img"
                />
                <div className="hero--vacancy__blocks--block__descrip">
                  <div className="hero--vacancy__blocks--block__descrip--part">
                    <h5>Компания</h5>
                    <h3>RetMind</h3>
                  </div>
                  <div className="hero--vacancy__blocks--block__descrip--part">
                    <h5>Должность</h5>
                    <h3>Full Stack разработчик (Python-Django/ JavaScript-React)</h3>
                  </div>
                  <div className="hero--vacancy__blocks--block__descrip--part">
                    <h5>Оклад</h5>
                    <h3>1500 - 3000 USD в месяц</h3>
                  </div>
                  <div className="hero--vacancy__blocks--block__descrip--part">
                    <h5>Тип</h5>
                    <h3>Офис / Бишкек</h3>
                  </div>
                </div>
              </div>
              <div className="hero--vacancy__blocks--block">
                <img
                  src="https://devkg.com/images/organizations/36d2730970ee88fc351b61b2ea4ab182.webp"
                  alt="img"
                />
                <div className="hero--vacancy__blocks--block__descrip">
                  <div className="hero--vacancy__blocks--block__descrip--part">
                    <h5>Компания</h5>
                    <h3>Мобильный оператор O!</h3>
                  </div>
                  <div className="hero--vacancy__blocks--block__descrip--part">
                    <h5>Должность</h5>
                    <h3>Full Stack разработчик (Python-Django/ JavaScript-React)</h3>
                  </div>
                  <div className="hero--vacancy__blocks--block__descrip--part">
                    <h5>Оклад</h5>
                    <h3>1500 - 3000 USD в месяц</h3>
                  </div>
                  <div className="hero--vacancy__blocks--block__descrip--part">
                    <h5>Тип</h5>
                    <h3>Офис / Бишкек</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="video">
      <div className="container">
        <div className="video">
          <h2>Последние видео</h2>
          <div className="video--cards">
            <div className="video--cards__card">
              <h1>
                Кибирд (Keybeard) #43 – Синдром самозванца в IT 2023 (feat.
                Даниил Вартанов)
              </h1>
              <div className="video--cards__card--titles">
                <div className="video--cards__card--titles__title">
                  <h3>Организатор</h3>
                  <h2>Mad Devs</h2>
                </div>
                <div className="video--cards__card--titles__title">
                  <h3>Когда</h3>
                  <h2>30 августа 2023</h2>
                </div>
              </div>
              <div className="video--cards__card--img"></div>
              <img
                src="https://devkg.com/images/meetups/417c92a3f184b3cb5c7e204c63307248.webp"
                alt="img"
              />
            </div>
            <div className="video--cards__card">
              <h1>
              ChatGPT — революция или мода? Как нейросети могут помочь в работе
              </h1>
              <div className="video--cards__card--titles">
                <div className="video--cards__card--titles__title">
                  <h3>Организатор</h3>
                  <h2>Kolesa Group</h2>
                </div>
                <div className="video--cards__card--titles__title">
                  <h3>Когда</h3>
                  <h2>12 сентября 2023</h2>
                </div>
              </div>
              <div className="video--cards__card--img"></div>
              <img
                src="https://devkg.com/images/meetups/d37f3db23b3182ce2b9aa2490d383c5e.webp"
                alt="img"
              />
            </div>
            <div className="video--cards__card">
              <h1>
                Кибирд (Keybeard) #43 – Синдром самозванца в IT 2023 (feat.
                Даниил Вартанов)
              </h1>
              <div className="video--cards__card--titles">
                <div className="video--cards__card--titles__title">
                  <h3>Организатор</h3>
                  <h2>Mad Devs</h2>
                </div>
                <div className="video--cards__card--titles__title">
                  <h3>Когда</h3>
                  <h2>30 августа 2023</h2>
                </div>
              </div>
              <div className="video--cards__card--img"></div>
              <img
                src="https://devkg.com/images/meetups/417c92a3f184b3cb5c7e204c63307248.webp"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
