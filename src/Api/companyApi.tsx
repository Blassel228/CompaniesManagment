import baseApi from "./baseApi";
import { AxiosError } from "axios";
import {CompanyListResponse, CompanyResponse, CreateCompany, UpdateCompany} from "../Types/Company.tsx";
import {getItem} from "../Utils/localstorage.tsx";

export async function createCompanyApi(
  company: CreateCompany
): Promise<CompanyResponse> {
  try {
    const token = getItem("token");
     const response = await baseApi.post("/company/", {
      ...company,
    },{headers: { Authorization: `Bearer ${token}` }});

    return response.data as CompanyResponse;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.detail || "Company creation failed");
    }
    throw new Error("An unexpected error occurred");
  }
}

export async function updateCompanyApi(
  company_id: number,
  company: UpdateCompany
): Promise<CompanyResponse> {
  try {
    const token = getItem("token");
     const response = await baseApi.put(`/company/${company_id}`, {
      ...company,
    },{headers: { Authorization: `Bearer ${token}` }});

    return response.data as CompanyResponse;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.detail || "Company creation failed");
    }
    throw new Error("An unexpected error occurred");
  }
}

export async function getCompaniesApi(): Promise<CompanyListResponse> {
  try {
      const response = await baseApi.get("/company/visible");
      return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.detail || "Company creation failed");
    }
    throw new Error("An unexpected error occurred");
  }
}

export async function getCompanyApi(company_id: number): Promise<CompanyResponse> {
  try {
    const response = await baseApi.get(`/visible/${company_id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.detail || "Company creation failed");
    }
    throw new Error("An unexpected error occurred");
  }
}

export async function deleteCompanyApi(company_id: number): Promise<CompanyResponse> {
  try {
   const token = getItem("token");
   const response = await baseApi.delete(`/company/${company_id}/owner`,
   {headers: { Authorization: `Bearer ${token}` }});

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.detail || "Company deletion failed");
    }
    throw new Error("An unexpected error occurred");
  }
}