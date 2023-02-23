import { useNavigate } from "react-router-dom";

import ArrowLeft from "../../icons/ArrowLeft";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)}>
      <ArrowLeft />
    </button>
  );
};

export default BackButton;
