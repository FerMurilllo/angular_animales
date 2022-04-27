export interface Usuarios {
    id: number,
    username: string,
    email: string,
    password: string
}

export interface UsuarioI {
    id : number, 
    username : string, 
 
}
export interface Usuario {
    username?: string;
    password?: string;
    email?:string;
    rol?: string;
}

export interface R1 {
      usuario: Usuario;
      
}
export interface UserResponse{
    type: string,
    token:string,
    userid: number
}

export interface R0 {
      users: Usuarios[];
}
    
export interface RespuestaI {

    status : any, 
    message : any,
    data : any

}
export interface LoginI {
    email:string;
    password:string;
}
