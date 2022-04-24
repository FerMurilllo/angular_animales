/*
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject, tap } from 'rxjs';
import { rutas } from 'src/environments/environment';
import { R0, Usuario} from '../../Modelos/usuarios.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private _cookieService: CookieService) 
  {
  }

  login(info: Usuario): Observable<any>{
    return this.http.post<R0>(rutas.login, info)
  }
  
  register(info: Usuario): Observable<any>{
    return this.http.post<R0>(rutas.register, info)
  }

  
  getUsuario(): Observable<any>{
    return this.http.get<R0>(rutas.token_validacion)
  }

  setToken(token: string): void {
    this._cookieService.set('token',token,4,'/')
  }

  

  removeToken(): void {
    this._cookieService.delete('token');
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }
}

/*
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { LUser } from 'src/app/models/loginuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL=environment.apiURL;
  constructor(private http:HttpClient) { }
  gettoken(){
    return this.http.get<any>(`${this.apiURL}srevisarToken`);
  }
  registro(user:User):Observable<any>{
    return this.http.post(`${this.apiURL}Register`,user);
  }

  login(user:LUser):Observable<any>{
    return this.http.post(`${this.apiURL}Login`,user);
  }

  //usuarios
  getUsuarios(){
    return this.http.get<User[]>(`${this.apiURL}usuario`);
  }
  addUsuario(usuario:User){
    return this.http.post(`${this.apiURL}register`,usuario);
  }
  getUsuario(id:number|string|null){
    return this.http.get(`${this.apiURL}usuario/${id}`);
  }
  deletUsuario(id:string){
    return this.http.delete(`${this.apiURL}usuario/${id}`);
  }
  updateUsuario(updateUsuario:User):Observable<User>{
    return this.http.patch<User>(`${this.apiURL}editarUser/${updateUsuario.id}`,updateUsuario)
  } 
  getUsuariobyToken(t:any):Observable<any>{
    return this.http.get(`${this.apiURL}usuario`,t);
  }
}

*/