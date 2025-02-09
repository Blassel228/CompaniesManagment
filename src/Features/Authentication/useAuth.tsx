import {clearAuthorizedUser, setAuthorizedUser, setProfileImage} from "../../Store/slices/authorizedUserSlice";
import { loginGetToken, loginGetUserByToken } from "../../Api/apiAuth";
import {useDispatch} from 'react-redux';
import Token from "../../Types/Token.tsx";
import { User } from "../../Types/User";
import {getItem, removeItem, setItem} from "../../Utils/localstorage.tsx";
import {getImage} from "../../Api/imageApi.tsx";
import baseApi from "../../Api/baseApi.tsx";
import useNavigation from "../../Utils/navigate.tsx";

export default function useAuth() {
  const dispatch = useDispatch();
  const {goTo} = useNavigation();

  async function login(username: string, password: string): Promise<void> {
    try {
      const response: Token = await loginGetToken(username, password);
      const token = response.access_token;
      const refresh_token = response.refresh_token;
      const user: User = await loginGetUserByToken(token);
      setItem("refresh_token", refresh_token);
      setItem("token", token);
      dispatch(setAuthorizedUser(user));

      if (user?.id) {
        const profileImage = await getImage(user.id);
        dispatch(setProfileImage(profileImage.image_data));
      }

      goTo("/welcome");
    } catch (error) {
      throw new Error(error.message || "Error logging in");
    }
  }

  async function logout() {
    removeItem("token");
    dispatch(clearAuthorizedUser());
    goTo("/login");
  }

  async function refreshAccessToken(): Promise<string | null> {
    const refreshToken = getItem("refresh_token");
    if (!refreshToken) return null;

    try {
      const response = await baseApi.post(`/token/refresh/`, {
        token: refreshToken,
      });
      console.log(`REFRESH TOKEN: ${response}`);
      const newAccessToken = response.data.access_token;
      console.log(`REFRESH TOKEN: ${response}`);

      setItem("token", newAccessToken);
      return newAccessToken;
    } catch (err) {
      removeItem("token");
      removeItem("refresh_token");
      console.error("Failed to refresh token", err);
      return null;
    }
  }

  return { login, logout, refreshAccessToken };
}
