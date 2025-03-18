import { useGetCompanies } from "./useGetCompanies.tsx";
import { CompanyItem } from "./CompanyItem.tsx";

export function CompanyList() {
  const { isLoading, companies, error } = useGetCompanies();
  if (isLoading) return <p>Loading...</p>;
  if (!companies || companies.length === 0) return <p></p>;

  return (
    <>
      {companies.map((company) => (
        <CompanyItem key={company.id} company={company} />
      ))}
    </>
  );
}
