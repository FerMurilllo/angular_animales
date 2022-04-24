import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal, Animales  } from 'src/app/Modelos/animales.response';
import { AnimalesService } from 'src/app/Services/animales.service';
@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

  constructor(private service: AnimalesService, route: Router) { 
  }

  Datos : any = [];

  ngOnInit(): void {
    this.service.getAll().subscribe(datos => {
      this.Datos = datos.data; 
    });
  }

  Crear(info: Animales){
    this.service.crear(info).subscribe(datos => {
      this.Datos = datos.animal; 
      console.log(this.Datos); 
    });
  }

  Eliminar(id : any){
    console.log(id); 
    this.service.eliminar(id).subscribe(datos =>{
      console.log(datos); 
      this.ngOnInit(); 
    })
  }

}
