import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../Componentes/Auth/auth.service';

@Injectable(
    {
        providedIn : 'root'
    }
)
export class AuthInterceptor implements HttpInterceptor {
   constructor(private api : AuthService) {}

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.api.getToken(); 
        const authReq = req.clone({headers: req.headers.set('Authorization', `Bearer ${authToken}`)});
        console.log("Interceptor");
        console.log(authReq); 
        return next.handle(authReq);
   }
}
