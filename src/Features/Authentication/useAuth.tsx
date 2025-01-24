import {clearAuthorizedUser, setAuthorizedUser, setProfileImage} from "../../Store/slices/authorizedUserSlice";
import { loginGetToken, loginGetUserByToken } from "../../Api/apiAuth";
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import TokenResponse from "../../Types/TokenResponse";
import { User } from "../../Types/User";
import {removeItem, setItem} from "../../Utils/localstorage.tsx";
import {getImage} from "../../Api/imageApi.tsx";

export default function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function login(username: string, password: string): Promise<void> {
    try {
      const response: TokenResponse = await loginGetToken(username, password);
      const token = response.access_token;

      const user: User = await loginGetUserByToken(token);
      setItem("token", token);
      dispatch(setAuthorizedUser(user));

      if (user?.id) {
        const profileImage = await getImage(user.id);
        dispatch(setProfileImage(profileImage.image_data));
      }

      navigate("/welcome");
    } catch (error) {
      throw new Error(error.message || "Error logging in");
    }
  }

  async function logout() {
    removeItem("token");
    dispatch(clearAuthorizedUser());
    navigate("/login");
  }

  return { login, logout };
}
