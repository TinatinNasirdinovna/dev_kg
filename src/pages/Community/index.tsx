import CommunityList from "./CommunityList";
import useFetch from "../../hooks/useFetch";
import Loading from "../../ui/Loading";

const Community = () => {
  const { data, loading } = useFetch({ url: "http://3.38.98.134/community" }); 

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
