import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RespuestaI, Usuario } from 'src/app/Modelos/usuarios.response';
import { AuthService } from '../auth.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.component.html',
  styleUrls: ['./registro-user.component.css'],
  animations: [
    trigger("IzquierdaDerecha", [
    state("void", style({
      transform: "translateX(-100%)",
      opacity: 1
    })),
    transition(":enter", [
      animate(900, style({
        transform:"translateX(100%)",
        opacity:1
      }))
    ])
  ])],
})
export class RegistroUserComponent implements OnInit {

  
  registrarseForm = new FormGroup({
    username : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
  })

  
  constructor(private api : AuthService, private router:Router) { }



  ngOnInit(): void {
  }

  onRegistrarse(form : Usuario){
    if(this.registrarseForm.get("password")?.value){
       this.api.register(form).subscribe(data => {
         let datosResponse : RespuestaI = data; 
         console.log(datosResponse); 
         if(datosResponse.status){
           this.router.navigate(["../login"]);
           alert("El Registro Fue Exitoso"); 
         }
       })
    }
  }

}
