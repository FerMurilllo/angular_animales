import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { AuthService } from '../../Auth/auth.service';
import { Usuario } from 'src/app/Modelos/usuarios.response';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public user: Usuario ={}
  public data:any

  constructor(private api: AuthService, private apiUser: UsuariosService, private route : Router) { }

  ngOnInit(): void {
    this.getUser()

    this.Username  = this.api.userName;
    this.UserId  = this.api.idUser; 
    this.UserActivo  = this.api.UsusarioActivo;
  }

  Username : string = this.api.userName;
  UserId : string = this.api.idUser; 
  UserActivo : boolean = this.api.UsusarioActivo;
 

  sesionCerrar(){
    this.api.logout(this.api.getToken);  

    this.UserId = this.api.idUser = ""; 
    this.Username = this.api.userName = ""; 
    this.UserActivo = this.api.UsusarioActivo = false; 
    
    console.log(this.UserActivo)
    console.log(this.api.UsusarioActivo); 
    localStorage.clear()
    this.route.navigate(["/"]);
    alert("Sesion Finalizada");
  }

  getUser(){
    this.apiUser.getOne().subscribe(respuesta=>{
      this.user = respuesta.usuario! 
    })
  }
 

  
  getToke(){
    if(localStorage.getItem('Token') != null){
      return true;
    }
    return false;
  }




}


