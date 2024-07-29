import React, { useEffect, useState } from "react";
import EventsList from "./EventsList";
import useFetch from "../../hooks/useFetch";
import Loading from "../../ui/Loading";

function Events() {
  const events_url = "http://3.38.98.134/events";
  const { data, loading } = useFetch({ url: events_url });

  if (loading) {
    return <Loading />;
  }

  return (
    <div id="events">
      <div className="container">
        <div className="btn1">
          <button>Добавить мероприятиe</button>
        </div>
        {data &&
          data.map((el: any, index: number) => {
            return (
              <EventsList
                key={index}
                location={el.location}
                name={el.name}
                organization_name={el.organization_name}
                date={el.date}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Events;
