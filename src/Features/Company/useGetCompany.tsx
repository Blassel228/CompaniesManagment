import { useQuery } from "react-query";
import { getCompanyApi } from "../../Api/companyApi";
import { CompanyResponse } from "../../Types/Company.tsx";
import { toast } from "react-toastify";

export function useGetCompany(companyId: number) {
  const {
    data: company,
    isLoading,
    isError,
    error,
  } = useQuery<CompanyResponse, Error>(["company", companyId], () => getCompanyApi(companyId), {
    onError: (error) => {
      toast.error(error.message || "Failed to fetch company data");
    },
    onSuccess: (data) => {
      toast.success(`Fetched company data successfully: ${data.name}`);
    },
  });

  return { company, isLoading, isError, error };
}
