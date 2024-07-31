import EventsList from "./EventsList";
import useFetch from "../../hooks/useFetch";
import Loading from "../../ui/Loading";
import { EventTypes } from "../../types";
import { API } from "../../API";


function Events() {
  const { data, loading } = useFetch({ url: `${API}events` });

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
          data.map((el: EventTypes, index: number) => {
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
