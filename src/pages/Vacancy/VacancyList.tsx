import { Link } from "react-router-dom"


export const VacancyList = ({
    organization_name = '',
    position = '',
    paymentType = '',
    price_from = 0,
    price_to = 0,
    type = '',
    city = '',
    currency = '',
    organization_icon = "",
}: {
    organization_name : string,
    position: string,
    paymentType: string,
    price_from: number,
    price_to: number,
    type: string,
    city: string,
    currency: string,
    organization_icon: string
}) => {
return (
    <Link to={"/detailPosition"}>
              <div className="jobs-list">
                <div className="jobs-item content">
                  <div className="jobs-item-field icon">
                    <div className="preview images">
                      <picture>
                        <img
                          src= {`${organization_icon}`}
                          alt=""
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="information">
                    <div
                      className="jobs-item-field company"
                    >
                      <span className="label">Компания</span>
                    {organization_name}
                    </div>
                    <div className="jobs-item-field position" >
                      <span className="label">Должность</span>
                     {position}
                    </div>
                    <div
                      className="jobs-item-field price"
                      
                    >
                      <span className="label">Оклад</span>
                     {`${price_to} - ${price_from} ${currency} в ${paymentType}`}
                    </div>
                    <div
                      className="jobs-item-field type"
                      
                    >
                      <span className="label">Тип</span>
                  {`${type} / ${city}`} 
                    </div>
                  </div>
                </div>
              </div>
              </Link>
)
}