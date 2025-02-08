import { useQuery } from "react-query";
import {getCompaniesApi} from "../../Api/companyApi.tsx";
import { CompanyListResponse } from "../../Types/Company.tsx";

export function useGetCompanies() {
  const { error, isLoading, data: companies } = useQuery<CompanyListResponse, Error>(
    "companies",
    getCompaniesApi
  );

  return { companies, error, isLoading };
}
