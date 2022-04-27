import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { rutas } from 'src/environments/environment';
import { R0, R1, Usuario } from '../Modelos/usuarios.response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private _refresh$ = new Subject<void>()
   

  token = this.cookieService.get('token')
  header = new HttpHeaders().
  append('Content-Type', 'application/json').
  append('Authorization',`Bearer ${this.token}`)
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  
  getAll(): Observable<any>{
    return this.http.get<R0>(rutas.usuarios, {headers:this.header})
  }
  getOne(){
    return this.http.get<R1>(rutas.usuarios, {headers:this.header})
  }
  getUser(id:number): Observable<any>{
    return this.http.get<R1>(rutas.usuarios+'/'+id, {headers:this.header})
  }
  status(id:any){
    return this.http.delete<R1>(rutas.usuarios+'/'+id, {headers:this.header})
  }
  update(id:any, info: Usuario): Observable<any>{
    return this.http.put<R1>(rutas.usuarios+'/'+id, info, {headers:this.header})
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    ); 
  }
}
