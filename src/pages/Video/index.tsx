import React from "react";
import useFetch from "../../hooks/useFetch";
import VideoList from "./VideoList";
import Loading from "../../ui/Loading";
import { VideoTypes } from "../../types";

const Video = () => {
  const meetups_url = 'http://3.38.98.134/meetups'

  const {data, loading} = useFetch({url: meetups_url})

  if (loading) {
    return <Loading/>;
  }
  return (
    <div id="video">
      <div className="container">
        <div className="video">
          <div className="video--btn">
            <button>Добавить видео</button>
          </div>
          <h2>Все видео</h2>
          <div className="video--cards">
            {data.map((el: VideoTypes, index:number) => (
              <VideoList 
              key={index}
              title= {el.title}
              organization_name={el.organization_name}
              date={el.date}
              cover_formats={el.cover_formats}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
