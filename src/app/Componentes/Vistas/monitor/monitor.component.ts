import { Component, OnInit } from '@angular/core';
import { delay, interval, startWith } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';
import { PartidaService } from 'src/app/Services/partida.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css'],

  animations: [
    trigger("IzquierdaDerecha", [
    state("void", style({
      transform: "translateX(-100%)",
      opacity: 1
    })),
    transition(":enter", [
      animate(4500, style({
        transform:"translateX(250%)",
        opacity:1
      }))
    ])
  ])],

})

export class MonitorComponent implements OnInit {
  aparecer = false
  monitor = 999999
  iniciar = false
  jugadores: any[] = []
  constructor(private p:PartidaService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params=>{
        console.log(params['monitor'])
        this.monitor = params['monitor']
        this.validar1erLugar(params['monitor'])
      })
  }

  contador = interval(500).subscribe((tiempo)=>{
    // this.p.estado(this.monitor).subscribe(respuesta=>{
    //   console.log(respuesta)
    // })
  })

  contador2 = interval(4500).subscribe((tiempo)=>{
    // this.jugadores.monitor!.forEach(element => {
    //   setTimeout(() => {
    //   this.aparecer = false;
    // }, 4500);
    // });
    // this.p.comprobar().subscribe(respuesta=>{
    //   console.log(respuesta)
    // })
  })

  validar1erLugar(monitor:number){
    this.p.validarLugar(monitor).subscribe(respuesta=>{
      if(respuesta.data){
        this.iniciar= true
      }
    })
  }

  ngOnInit(): void {
    // this.contador
    // this.p.juego()
  }
  empezar(){
    this.p.iniciar(this.monitor).subscribe(respuesta=>{
      console.log("esta respuesta",respuesta)
      this.jugadores= respuesta.data!
      this.aparecer = true;
      setTimeout(() => {
        this.aparecer = false;
      }, 4500);
    })
  }

}
