import { useMutation, useQueryClient } from "react-query";
import { createCompanyApi } from "../../Api/companyApi";
import { CreateCompany, CompanyResponse } from "../../Types/Company.tsx";
import { toast } from "react-toastify";

export function useCreateCompany() {
  const queryClient = useQueryClient();

  const {isLoading: isCreating, mutate: createCompany} = useMutation<CompanyResponse, Error, CreateCompany>(
    createCompanyApi,
    {
      onError: (error) => {
        toast.error(error.message || "Company creation failed");
      },
      onSuccess: (data) => {
        toast.success(`Company created successfully: ${data.name}`);

        queryClient.invalidateQueries("companies");
      },
    }
  );
  return {isCreating, createCompany};
}
