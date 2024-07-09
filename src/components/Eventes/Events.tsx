import React from 'react';
import { Link } from 'react-router-dom';

const Eventes = () => {
    return (
        <div id='events'>
            <div className="events">
                <div className="btn">
                    <button>Дабавить мероприятие</button>
                </div>
                <div className="image">
                <div className="text">
                    <h2>25 августа 2024 17:00</h2>
                    <h1>InkubasiaLAB 2024’s Machine Learning AI Bootcamp</h1>
                    <h3>Организатор <span>InkubasiaLAB</span></h3>
                    <h4>Локация <span>Коворкинг-резорт ololoAkJol</span></h4>
                    </div>
                    <img src="https://devkg.com/images/events/e975ab09a375897590241aaec11d51fa.png" data-v-17b3db24=""/>                
                </div>
            </div>
        </div>
    );
};

export default Eventes;