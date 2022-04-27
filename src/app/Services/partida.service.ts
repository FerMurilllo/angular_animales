import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { rutas } from 'src/environments/environment';
import { R0, R1, Usuario } from '../Modelos/usuarios.response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  private _refresh$ = new Subject<void>()


  token = this.cookieService.get('token')
  header = new HttpHeaders().
  append('Content-Type', 'application/json').
  append('Authorization',`Bearer ${this.token}`)
  constructor(private http: HttpClient, private cookieService: CookieService) { }


  entrar(monitor:number): Observable<any>{
    return this.http.post<R0>(rutas.entrar,{monitor}, {headers:this.header})
  }
}
