import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseI } from 'src/app/Modelos/Response.interface';
import { LoginI } from 'src/app/Modelos/usuarios.response';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger("IzquierdaDerecha", [
    state("void", style({
      transform: "translateX(-100%)",
      opacity: 1
    })),
    transition(":enter", [
      animate(700, style({
        transform:"translateX(0)",
        opacity:1
      }))
    ])
  ])],
})
export class LoginComponent implements OnInit {

 
  loginForm = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });

  constructor(private api:AuthService, private router:Router) { }

  errorStatus : void | undefined ; 
  errorMsg : string = '';
  //DATOS USUARIO
  idUser = "";
  userName = "";

  ngOnInit(): void {
  }

  onLogin(form : LoginI){
    this.api.login(form).subscribe(datas => {
      console.log(form); 
      console.log(datas); 
      let datosResponse : ResponseI = datas;

     // if(datosResponse.data){

        this.api.UsusarioActivo = true; 
        localStorage.setItem("Token", datosResponse.data.token);
        console.log('2')
        this.api.sacarUser(form.email).subscribe(datas => {
          console.log(datas);
          this.api.idUser = datas.data.id;
       
          this.api.sacarUserAll(this.api.idUser).subscribe(datos => {
            this.api.userName = datos.data.username;
            this.api.tipoUser = datos.data.rol;
            localStorage.setItem("Tipo", datos.data.rol);
            localStorage.setItem("username", datos.data.username);

            console.log(this.api.userName);

            this.router.navigate(['Partidas']);
            console.log('2')

            alert("El Login Ha Sido Exitoso"); 
          })
        }); 
     
    
    })
  }

}
