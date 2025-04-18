import { useNavigate } from "react-router-dom";

export default function useReturnBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}
