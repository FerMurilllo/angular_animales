export interface Usuarios {
    id: number,
    rol_id: number,
    username: string,
    email: string,
    password: string
}

export interface Usuario {
    rol_id: number,
    username: string,
    email: string,
    password: string
}

export interface R1 {
      user: Usuario;
}
export interface UserResponse{
    type: string,
    token:string,
    userid: number
}

export interface R0 {
      users: Usuarios[];
}
    
