import { useRecoilState, useRecoilValue } from "recoil";
import { userAtom } from "../store/atoms/atoms.js";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BACKEND_URL } from "../config.js";

export const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useRecoilState(userAtom);
  const userId = user.userId;
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/v1/auth/validate`,
          {
            withCredentials: true,
          }
        );
        const token = response.data.token;
        if (token) {
          const decodedToken = jwtDecode(token);
          setUser({
            userId: decodedToken.userId,
            initials: decodedToken.initials,
            firstName: decodedToken.firstName,
            lastName: decodedToken.lastName,
            email: decodedToken.email,
          });
        }
      } catch (error) {
        console.error("Token validation failed:", error);
        navigate("/signin");
      }
    };
    fetchUser();
  }, [navigate, setUser]);
  return children;
};
