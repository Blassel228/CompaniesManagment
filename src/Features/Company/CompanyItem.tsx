import styled, { keyframes } from "styled-components";
import { Company } from "../../Types/Company.tsx";
import { useDeleteCompany } from "./useDeleteCompany.tsx";
import useNavigation from "../../Utils/navigate.tsx";

const CompanyCard = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #171616;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CompanyName = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
`;

const CompanyDescription = styled.p`
  font-size: 1.4rem;
  color: white;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.2rem;
  font-size: 1.4rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &.edit {
    background-color: #007bff;
    color: #fff;

    &:hover {
      background-color: #0056b3;
    }
  }

  &.delete {
    background-color: #dc3545;
    color: #fff;

    &:hover {
      background-color: #a71d2a;
    }
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 2px solid #fff;
  border-top: 2px solid transparent;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  animation: ${spin} 0.6s linear infinite;
`;

export function CompanyItem({ company }: Company) {
  const { description, name, id } = company;
  const { deleteCompany, isDeleting } = useDeleteCompany();
  const { goTo } = useNavigation();

  async function handleClickEdit() {
    goTo(`/update-company/${id}`, { state: { company } });
  }

  async function handleDelete() {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${name}"?`,
    );
    if (confirmed) {
      await deleteCompany(id);
    }
  }

  return (
    <CompanyCard>
      <CompanyName>{name}</CompanyName>
      <CompanyDescription>{description}</CompanyDescription>
      <ButtonGroup>
        <Button
          className="edit"
          disabled={isDeleting}
          onClick={handleClickEdit}
        >
          Edit
        </Button>
        <Button className="delete" onClick={handleDelete} disabled={isDeleting}>
          {isDeleting ? (
            <>
              <Spinner /> Deleting...
            </>
          ) : (
            "Delete"
          )}
        </Button>
      </ButtonGroup>
    </CompanyCard>
  );
}
