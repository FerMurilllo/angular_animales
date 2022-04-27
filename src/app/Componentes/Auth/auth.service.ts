
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { ResponseI } from 'src/app/Modelos/Response.interface';
import { rutas } from 'src/environments/environment';
import { LoginI, R0, RespuestaI, Usuario} from '../../Modelos/usuarios.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UsusarioActivo = false;
  CorreoUser = "";
  idUser = "";
  userName = ""; 
  aprobado = true;  
  tipoUser = "";


  constructor(
    private http: HttpClient) 
  {
  }

  login(form: LoginI): Observable<any>{
    return this.http.post<ResponseI>(rutas.login, form)
  }
  
  register(info: Usuario): Observable<any>{
    return this.http.post<Usuario>(rutas.register, info)
  }

  logout(token: any, body=""){
    localStorage.removeItem("Token")
    this.http.post(rutas.logout,body);
  }

  
  getUser(): Observable<any>{
    return this.http.get<Usuario>(rutas.token_validacion)
  }
  sacarUserAll(id:string){
    let endpoint = rutas.usuarios + '/' + id; 
    return this.http.get<ResponseI>(endpoint);
  }
  sacarUser(email:string){
    let endpoint = rutas.usuarios + '/' + email; 
    return this.http.get<ResponseI>(endpoint);
  }



  
  getIndexUser():Observable<ResponseI>{
    const u = rutas.usuarios + '/' ; 
    return this.http.get<ResponseI>(u); 
  }

  postStoreUser(User : Usuario):Observable<ResponseI>{
    const u = rutas.usuarios + '/' ; 
    return this.http.post<ResponseI>(u, User); 
  }

  getShowUser(id : number):Observable<ResponseI>{
    const u = rutas.usuarios + '/' + id; 
    return this.http.get<ResponseI>(u); 
  }

  putUpdateUser(id : number, User : any):Observable<ResponseI>{
    const u = rutas.usuarios + '/' + id; 
    return this.http.put<ResponseI>(u, User); 
  }

  deleteDestroyUser(id : number):Observable<ResponseI>{
    const u = rutas.usuarios + '/' + id; 
    return this.http.delete<ResponseI>(u); 
  }

  //GUARDAR DATOS LOCAL
  setToken(token : string){
    localStorage.setItem("Token", token);
  }

  getToken(){
    console.log(localStorage.getItem("Token")); 
    return localStorage.getItem("Token");
  }
}