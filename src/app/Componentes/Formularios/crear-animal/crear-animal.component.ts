import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Animales } from 'src/app/Modelos/animales.response';
import { AnimalesService } from 'src/app/Services/animales.service';
import { PeticionService } from 'src/app/Services/peticion.service';

@Component({
  selector: 'app-crear-animal',
  templateUrl: './crear-animal.component.html',
  styleUrls: ['./crear-animal.component.css']
})
export class CrearAnimalComponent implements OnInit {

  FormAnimal : any;
  DatosEspecie : any;

  constructor(private apiEspecie : PeticionService, private peticion : AnimalesService, private router: Router ) { }

  ngOnInit(): void {
    this.FormAnimal = new FormGroup({
      Nombre: new FormControl('', Validators.required),
      Especie: new FormControl('', Validators.required)

    })

    this.apiEspecie.getAll().subscribe(datos => {
        this.DatosEspecie = datos.data;
        console.log(this.DatosEspecie); 
    })
  }



  Enviar(animal : Animales){
    this.peticion.crear(animal).subscribe(datos => {
      console.log(datos);
      alert("Animal Creado Exitosamente"); 
      this.router.navigate(['../animales'])
    })

  }

}
