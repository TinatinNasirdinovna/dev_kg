import List from "./List";
const CommunityList = ({
  data
}: {
  data: any;
}) => {

  const devkg = data?.[0]?.devkg || [];
  const facebook = data?.[0]?.facebook || [];

  return (
    <div className="community--telegram">
      <h1></h1>
      <div className="community--telegram__blocks">
        {
          devkg.map((item: {label: string, value: string}, index: number) => (
            <List key={index} label={item.label} />
          ))
        }

        {
          facebook.map((item: {label: string, value: string}, index: number) => (
            <List key={index} label={item.label} />
          ))
        }
      </div>
    </div>
  );
};

export default CommunityList;
