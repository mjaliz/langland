import { useNavigate } from "react-router-dom";

import ArrowLeft from "../../icons/heroicons/ArrowLeft";

const BackButton = ({ classes }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className={`${classes}`}>
      <ArrowLeft />
    </button>
  );
};

export default BackButton;
