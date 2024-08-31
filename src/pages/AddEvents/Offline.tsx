import React from "react";

const Offline = () => {
  return (
    <div className="off">
      <div className="off--img">
        <div className="off--img__img">
          <h3>Изображение</h3>
          <input type="file"/>
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
    </div>
  );
};

export default Offline;
