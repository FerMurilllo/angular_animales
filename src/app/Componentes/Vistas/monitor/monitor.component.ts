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
      animate(900, style({
        transform:"translateX(0)",
        opacity:1
      }))
    ])
  ])],
  
})

export class MonitorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}