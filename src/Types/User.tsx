export interface User{
    id: number,
    username: string,
    email: string,
    profileImage: string
}

export interface CreateUser{
    username: string,
    email: string
    password: string
}

export interface UserResponse{
    username: string,
    email: string
}