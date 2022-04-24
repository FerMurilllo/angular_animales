import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Especie } from 'src/app/Modelos/especies.response';
import { PeticionService } from 'src/app/Services/peticion.service';

@Component({
  selector: 'app-crear-especie',
  templateUrl: './crear-especie.component.html',
  styleUrls: ['./crear-especie.component.css']
})
export class CrearEspecieComponent implements OnInit {

  FormEspecie: any;
  
  constructor(private peticion:PeticionService, private router : Router) { }

  ngOnInit(): void {
    this.FormEspecie = new FormGroup({
      Nombre: new FormControl('', Validators.required)
    })
  }

  Enviar(especie: Especie){
    this.peticion.crear(especie).subscribe(datos => {
      console.log(datos); 
      alert("Especie Agregada Exitosamente"); 
      this.router.navigate(['../form-especies'])
    })
    
  }

}
