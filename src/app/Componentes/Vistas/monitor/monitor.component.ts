import { Component, OnInit } from '@angular/core';
import { interval, startWith } from 'rxjs';
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
  aparecer = true
  constructor(private p:PartidaService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params=>{
        console.log(params['monitor'])
      })
  }

  contador = interval(2000).subscribe((tiempo)=>{

  })
  ngOnInit(): void {

    // this.p.juego()
  }


}
