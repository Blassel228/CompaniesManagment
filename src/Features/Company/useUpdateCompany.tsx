import { useMutation, useQueryClient } from "react-query";
import { updateCompanyApi } from "../../Api/companyApi";
import { CompanyResponse, UpdateCompany } from "../../Types/Company.tsx";
import { toast } from "react-toastify";

export function useUpdateCompany() {
  const queryClient = useQueryClient();

  const {
    mutate: updateCompany,
    isLoading: isUpdating,
    error,
  } = useMutation<
    CompanyResponse,
    Error,
    { company_id: number; company: UpdateCompany }
  >(({ company_id, company }) => updateCompanyApi(company_id, company), {
    onError: (error) => {
      toast.error(error.message || "Company update failed");
    },
    onSuccess: (data) => {
      toast.success(`Company updated successfully: ${data.name}`);
      queryClient.invalidateQueries("companies");
    },
  });

  return { isUpdating, updateCompany, error };
}
