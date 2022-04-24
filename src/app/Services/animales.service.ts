import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { resp1,resp2, Animal, Animales } from '../Modelos/animales.response';
import { rutas } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  
  constructor(private http : HttpClient) { }

getAll():Observable<resp1>{
  return this.http.get<resp1>(rutas.animales)
}

getOne(indice:any):Observable<resp2>{
  return this.http.get<resp2>(rutas.animales + '/' + indice)
}

crear(info:Animales):Observable<resp2>{
  return this.http.post<resp2>(rutas.animales,info)
}

actualizar(indice:any, info:Animal):Observable<resp2>{
  return this.http.put<resp2>(rutas.animales+ '/' + indice, info)
}
eliminar(indice:any):Observable<resp2>{
  return this.http.delete<resp2>(rutas.animales+'/'+indice)
}
}
