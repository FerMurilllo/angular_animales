import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/Services/peticion.service';
import { Especies, Especie } from 'src/app/Modelos/especies.response';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-especies',
  templateUrl: './form-especies.component.html',
  styleUrls: ['./form-especies.component.css']
})
export class FormEspeciesComponent implements OnInit {

  error = false
  especies: Especies[] =[];
 

  constructor( private peticion:PeticionService, private router: Router ) { }

  Datos : any = [];
  
  ngOnInit(): void {
    this.peticion.getAll().subscribe(datos => {
      this.Datos = datos.data; 
      console.log(this.Datos); 
    });
   
  }
  
  
  
  Crear(info: Especie){
    this.peticion.crear(info).subscribe(datos => {
      this.Datos = datos; 
      console.log(this.Datos); 
    });
  }

  Eliminar(id : any){
    console.log(id); 
    this.peticion.eliminar(id).subscribe(datos =>{
      console.log(datos); 
      this.ngOnInit(); 
    })
  }

}
