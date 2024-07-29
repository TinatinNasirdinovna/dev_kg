import { FaTelegramPlane } from "react-icons/fa";

const List = ({
  label,
} = {
  label: ''
}) => {
  return (
    <div className="community--telegram__blocks--block">
      <span>
        <FaTelegramPlane />
      </span>
      <p>{label}</p>
    </div>
  );
};

export default List;
