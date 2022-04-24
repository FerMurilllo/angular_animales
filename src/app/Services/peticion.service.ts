import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Especies, Especie, resp1, resp2 } from '../Modelos/especies.response';
import { rutas } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PeticionService {

  constructor(private http : HttpClient) { }

      getAll():Observable<resp1>{
        return this.http.get<resp1>(rutas.especies)
      }
    


      getOne(indice:any):Observable<resp2>{
        return this.http.get<resp2>(rutas.especies + '/' + indice)
      }

      crear(info:Especie):Observable<resp2>{
        return this.http.post<resp2>(rutas.especies,info)
      }

      actualizar(indice:any, info:Especie):Observable<resp2>{
        return this.http.put<resp2>(rutas.especies+ '/' + indice, info)
      }
      eliminar(indice:any):Observable<resp2>{
        return this.http.delete<resp2>(rutas.especies+'/'+indice)
      }
}
