import EventsList from "./EventsList";
import useFetch from "../../hooks/useFetch";
import Loading from "../../ui/Loading";
import { EventTypes } from "../../types";
import { API } from "../../API";
import { useNavigate } from "react-router-dom";


function Events() {
  const nav = useNavigate()
  const { data, loading } = useFetch({ url: `${API}events` });

  if (loading) {
    return <Loading />;
  }

  return (
    <div id="events">
      
      <div className="container">
        <div className="btn1">
          <button onClick={() => nav('/addEvents')}>Добавить мероприятиe</button>
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
