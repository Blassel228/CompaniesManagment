import { useMutation, useQueryClient } from "react-query";
import { deleteCompanyApi } from "../../Api/companyApi";
import { CompanyResponse } from "../../Types/Company.tsx";
import { toast } from "react-toastify";

export function useDeleteCompany() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCompany } = useMutation<
    CompanyResponse,
    Error,
    number
  >((company_id: number) => deleteCompanyApi(company_id), {
    onError: (error) => {
      toast.error(error.message || "Company deletion failed");
    },
    onSuccess: () => {
      toast.success("Company deleted successfully");

      queryClient.invalidateQueries("companies");
    },
  });

  return { isDeleting, deleteCompany };
}
