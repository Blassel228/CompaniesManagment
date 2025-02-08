import baseApi from "./baseApi";
import Token  from "../Types/Token.tsx";
import { AxiosError } from "axios";
import {User} from "../Types/User.tsx";

export async function loginGetToken(username: string, password: string): Promise<Token> {
  try {
   const response = await baseApi.post(
        `/token/login`,
       new URLSearchParams({
        "username": username,
        "password": password,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.detail || "Login failed");
    }
    throw new Error("An unexpected error occurred");
  }
}

export async function loginGetUserByToken(token: string): Promise<User> {
  try {
    const response = await baseApi.get('/token/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
     throw new Error(error.response?.data?.detail || "Login failed");
  }
}