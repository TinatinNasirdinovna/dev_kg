import React from "react";
import { Link, useNavigate } from "react-router-dom";
import VacancyList from "./VacancyList";
import useFetch from "../../hooks/useFetch";
import { log } from "console";
import Loading from "../../ui/Loading";
import { IVacancyType } from "../../types";

const Vacancies = () => {
  const { data, loading } = useFetch();

  if (loading) {
    return <Loading />;
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
                  data.map((job: IVacancyType, index: number) => {
                    return (
                      <VacancyList
                        key={index}
                        organization_name={job.organization_name}
                        jobTitle={job.position}
                        paymentType={job.paymentType}
                        price_from={job.price_from}
                        price_to={job.price_to}
                        type={job.type}
                        city={job.city}
                        currency={job.currency}
                        salary={job.salary}
                        position={job.position}
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
