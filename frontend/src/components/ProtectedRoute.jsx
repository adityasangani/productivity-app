import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAtom } from "../store/atoms/atoms.js";

export const ProtectedRoute = ({ children }) => {
  const user = useRecoilValue(userAtom);
  const userId = user.userId;
  if (!userId) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};
