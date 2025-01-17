import {clearAuthorizedUser, setAuthorizedUser} from "../../Store/slices/authorizedUserSlice";
import { loginGetToken, loginGetUserByToken } from "../../Api/apiAuth";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import TokenResponse from "../../Types/TokenResponse";
import { User } from "../../Types/User";

export default function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function login(username: string, password: string): Promise<void> {
    try {
      const response: TokenResponse = await loginGetToken(username, password);
      const token = response.access_token;

      const user: User = await loginGetUserByToken(token);

      localStorage.setItem("token", token);
      console.log(localStorage.getItem("token"));

      dispatch(setAuthorizedUser(user));

      navigate("/welcome");

    } catch (error) {
      console.error(error.response?.detail || "Error logging in:", error);
    }
  }

  async function logout(){
    localStorage.removeItem("token");
    dispatch(clearAuthorizedUser());
    navigate("/login");
  }

  return { login, logout };
}
