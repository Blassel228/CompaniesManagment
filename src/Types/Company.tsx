export interface Company{
    id: number
    name: string,
    description: string
}

export interface UpdateCompany  {
    name: string,
    description: string
}


export interface CreateCompany{
    name: string,
    description: string,
    visible: boolean
}

export interface CompanyResponse{
    name: string,
    description: string,
    visible: boolean
}

export interface CompanyListResponse {
  companies: Company[];
}

export interface UpdateCompany{}