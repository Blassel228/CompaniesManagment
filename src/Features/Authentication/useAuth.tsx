import {setAuthorizedUser} from "../../Store/slices/authorizedUserSlice.tsx";
import { loginGetToken, loginGetUserByToken } from "../../Api/apiAuth.tsx";
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";
import TokenResponse from "../../Types/TokenResponse.tsx";
import {User} from "../../Types/User.tsx";

export default function useAuth(): { login: (username: string, password: string) => Promise<void> } {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function login(username: string, password: string): Promise<void> {
    const response: TokenResponse = await loginGetToken(username, password);
    const token = response.access_token;

    const user: User = await loginGetUserByToken(token);
    localStorage.setItem("token", token);

    dispatch(
      setAuthorizedUser({
        user: {
          email: user.email,
          id: user.id,
          username: user.username,
        },
      })
    );

    navigate("/");
  }

  return { login };
}