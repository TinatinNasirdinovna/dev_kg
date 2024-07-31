import React from "react";
import OrganizationList from "./OrganizationList";
import useFetch from "../../hooks/useFetch";
import Loading from "../../ui/Loading";
import { IOrganizationTypes } from "../../types";
import { API } from "../../API";

const Organizations = () => {
  const { data, loading } = useFetch({
    url: `${API}organizations`,
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div id="organizations">
      <div className="container">
        <div className="organizations">
          <div className="organizations--cards">
            {data &&
              data.map((el: IOrganizationTypes, index: number) => {
                return (
                  <OrganizationList
                    key={index}
                    name={el.name}
                    jobs_count={el.jobs_count}
                    meetups_count={el.meetups_count}
                    events_count={el.events_count}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizations;
