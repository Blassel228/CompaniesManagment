import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Company, UpdateCompany } from "../../Types/Company.tsx";
import { useUpdateCompany } from "./useUpdateCompany.tsx";
import AppLayout from "../../Components/AppLayout.tsx";
import Label from "../../Components/Label.tsx";
import Button from "../../Components/Button.tsx";
import Input from "../../Components/Input.tsx";
import Textarea from "../../Components/Textarea.tsx";
import styled from "styled-components";
import useNavigation from "../../Utils/navigate.tsx";
import { ErrorText } from "../../Components/Error.tsx";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;
`;

const FormWrapper = styled.div`
  background-color: #222;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 45rem;
  position: relative;
`;

const BackButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

export default function CompanyUpdateForm() {
  const { goBack } = useNavigation();
  const location = useLocation();
  const company: Company = location.state?.company;

  const { isUpdating, updateCompany } = useUpdateCompany();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: company?.name || "",
      description: company?.description || "",
    },
  });

  useEffect(() => {
    if (company) {
      setValue("name", company.name);
      setValue("description", company.description);
    }
  }, [company, setValue]);

  const handleUpdateCompanySubmit = async (data: Partial<Company>) => {
    await updateCompany({
      company_id: company.id,
      company: data as UpdateCompany,
    });
  };

  return (
    <AppLayout>
      <Container>
        <FormWrapper>
          <BackButton onClick={goBack}>
            <ArrowLeft />
          </BackButton>

          <form onSubmit={handleSubmit(handleUpdateCompanySubmit)}>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
              />
              <ErrorText>{errors.name && errors.name.message}</ErrorText>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                {...register("description", {
                  required: "Description is required",
                })}
              />
              <ErrorText>
                {errors.description && errors.description.message}
              </ErrorText>
            </div>

            <Button type="submit" disabled={isUpdating}>
              {isUpdating ? "Updating..." : "Update Company"}
            </Button>
          </form>
        </FormWrapper>
      </Container>
    </AppLayout>
  );
}
