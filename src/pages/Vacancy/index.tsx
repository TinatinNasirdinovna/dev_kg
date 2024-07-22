import React from "react";
import { Link, useNavigate } from "react-router-dom";
import VacancyList from "./VacancyList";
import useFetch from "../../hooks/useFetch";
import { log } from "console";

const Vacancies = () => {
  const { data, loading } = useFetch();
  console.log(data);

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <>
      <div id="vacancies">
        <div className="container">
          <div className="vacancies">
            <div className="vacancies__content">
              <div className="filter">
                <Link to={"/"}>
                  <button>Добавить вакансию</button>
                </Link>
              </div>
              <div className="jobs-list">
                {data &&
                  data.map((job: any, index: number) => {
                    return (
                      <VacancyList
                        key={index}
                        companyName={job.organization_name}
                        jobTitle={job.position}
                        paymentType={job.paymentType}
                        priceFrom={job.price_from}
                        priceTo={job.price_to}
                        type={job.type}
                        city={job.city}
                        currency={job.currency}
                        salary={job.salary}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vacancies;
