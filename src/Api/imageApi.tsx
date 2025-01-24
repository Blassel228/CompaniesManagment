import baseApi from "./baseApi";
import { AxiosError } from "axios";
import {ImageResponse} from "../Types/Image.tsx";
import {getItem} from "../Utils/localstorage.tsx";

export async function getImage(userId: number): Promise<ImageResponse> {
  try {
    const response = await baseApi.get<ImageResponse>(`/image/get_one_by_user_id/${userId}`);
    return response.data as ImageResponse;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.detail || "Registration failed");
    }
    throw new Error("An unexpected error occurred");
  }
}

export async function uploadImage(file: File){
  try {
    const formData = new FormData();
    formData.append("file", file);

    await baseApi.post("/image/upload_new_image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getItem("token")}`,
      },
    });

  } catch (error) {
    throw new Error(error.response?.data?.detail);
  }
};