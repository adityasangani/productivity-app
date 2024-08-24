import { useRecoilState, useRecoilValue } from "recoil";
import { userAtom } from "../store/atoms/atoms.js";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useRecoilState(userAtom);
  const userId = user.userId;
  const navigate = useNavigate();
  const token = Cookies.get("token");
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      if (!user.userId) {
        // Only set the user if it's not already set
        setUser({
          userId: decodedToken.userId,
          initials: decodedToken.initials,
          firstName: decodedToken.firstName,
          lastName: decodedToken.lastName,
          email: decodedToken.email,
        });
      }
    } catch (e) {
      console.error("Failed to decode token: ", e);
      navigate("/signin");
    }
  } else {
    navigate("/signin");
  }

  return children;
};
