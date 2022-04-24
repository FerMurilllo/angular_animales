import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Especie, Especies } from 'src/app/Modelos/especies.response';
import { PeticionService } from 'src/app/Services/peticion.service';


@Component({
  selector: 'app-especieform',
  templateUrl: './especieform.component.html',
  styleUrls: ['./especieform.component.css']
})
export class EspecieformComponent implements OnInit {

  error = false
  especies: Especies[] =[];
  FormEspecies : any;
  idEspecie :any ;

  constructor(  private rutaActiva : ActivatedRoute , private peticion:PeticionService, private router: Router ) {
   
   }

  Datos : any ;
  
  ngOnInit(): void {
    this.rutaActiva.params.subscribe(id => {
      this.idEspecie = id; 
    });
   

    this.FormEspecies  = new FormGroup({
      Nombre : new FormControl('', Validators.required), 
    });
  }
  get Nombre() { return this.FormEspecies.get('Nombre') };

  
  Enviar(info: Especies){
    this.peticion.actualizar( this.idEspecie.id, info).subscribe(datos =>{
      alert("Especie actualizada")
      this.router.navigate(['../form-especies']);
    });
  }
  

}
