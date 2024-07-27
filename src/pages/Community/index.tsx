import React, { useEffect, useState } from "react";
import CommunityList from "./CommunityList";
import useFetch from "../../hooks/useFetch";
import Loading from "../../ui/Loading";

const Community = () => {
  const { data, loading } = useFetch({ url: "http://3.38.98.134/community" });
  const [convertedData, setVertedData] = useState<any>([]);
  

 console.log(data[0]);
 



  if (loading) {
    return <Loading />;
  } 

  return (
    <div id="community">
      <div className="container">
        <div className="community">
          <CommunityList/>
        </div>
      </div>
    </div>
  );
};

export default Community;
