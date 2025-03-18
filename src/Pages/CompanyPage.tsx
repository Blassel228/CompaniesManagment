import { CompanyList } from "../Features/Company/CompanyList.tsx";
import AppLayout from "../Components/AppLayout.tsx";

export function CompanyPage() {
  return (
    <>
      <AppLayout>
        <CompanyList />
      </AppLayout>
    </>
  );
}
