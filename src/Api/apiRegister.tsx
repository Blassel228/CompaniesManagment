import baseApi from "./baseApi";
import { AxiosError } from "axios";
import { CreateUser, UserResponse } from "../Types/User";

export async function createUser(
  user: CreateUser
): Promise<UserResponse> {
  try {
     const response = await baseApi.post<UserResponse>("/user/", {
      ...user,
    });

    console.log("Response from createUser:", response);

    return response.data as UserResponse;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error in createUser:", error.response);
      throw new Error(error.response?.data?.detail || "Registration failed");
    }
    throw new Error("An unexpected error occurred");
  }
}
