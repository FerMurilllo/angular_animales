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
  validarLugar(monitor:number): Observable<any>{
    return this.http.post<R0>(rutas.primero,{monitor:monitor}, {headers:this.header})
  }

  iniciar(monitor:number): Observable<any>{
    return this.http.post<R0>(rutas.iniciar,{monitor:monitor}, {headers:this.header})
  }

  comprobar(monitor:number): Observable<any>{
    return this.http.post<R0>(rutas.comprobar,{monitor:monitor}, {headers:this.header})
  }

  estado(monitor1:number,monitor2:number, ): Observable<any>{
    return this.http.post<R0>(rutas.estado,{monitor_viejo:monitor1,monitor_nuevo:monitor2,}, {headers:this.header})
  }
}
