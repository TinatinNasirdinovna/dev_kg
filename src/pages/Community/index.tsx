import CommunityList from "./CommunityList";
import useFetch from "../../hooks/useFetch";
import Loading from "../../ui/Loading";
import { API } from "../../API";

const Community = () => {
  const { data, loading } = useFetch({ url:`${API}community` }); 

  if (loading) {
    return <Loading />;
  } 

  return (
    <div id="community">
      <div className="container">
        <div className="community">
          <CommunityList data={data}/>
        </div>
      </div>
    </div>
  );
};

export default Community;
