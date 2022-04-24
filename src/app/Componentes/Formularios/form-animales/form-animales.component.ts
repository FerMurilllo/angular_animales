import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animales } from 'src/app/Modelos/animales.response';
import { AnimalesService } from 'src/app/Services/animales.service';
import { PeticionService } from 'src/app/Services/peticion.service';

@Component({
  selector: 'app-form-animales',
  templateUrl: './form-animales.component.html',
  styleUrls: ['./form-animales.component.css']
})
export class FormAnimalesComponent implements OnInit {

  error = false
  especies: Animales[] =[];
  FormAnimales : any;
  idAnimales :any ;
  datosEspecies: any;

  constructor(  private rutaActiva : ActivatedRoute , private peticion:AnimalesService, private apiEspecie: PeticionService ,private router: Router ) {
   
   }

  Datos : any ;
  
  ngOnInit(): void {
    this.rutaActiva.params.subscribe(id => {
      this.idAnimales = id; 
    });
  
    this.FormAnimales  = new FormGroup({
      Nombre : new FormControl('', Validators.required), 
      Especie:new FormControl('', Validators.required)
    });

    this.apiEspecie.getAll().subscribe(datos => {
      this.datosEspecies = datos.data;
      console.log(this.datosEspecies); });

      console.log(this.idAnimales); 
  
}

  get Nombre() { return this.FormAnimales.get('Nombre') };

  Enviar(info: Animales){
    this.peticion.actualizar( this.idAnimales.id, info).subscribe(datos =>{
      alert("Animal actualizado")
      this.router.navigate(['../animales']);
    });
  }
}
