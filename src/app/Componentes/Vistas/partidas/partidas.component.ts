import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartidaService } from 'src/app/Services/partida.service';

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  styleUrls: ['./partidas.component.css']
})
export class PartidasComponent implements OnInit {
  monitor = 0
  constructor(private p: PartidaService, private r: Router) { }

  ngOnInit(): void {
  }
  jugar()
  {
    this.p.entrar(this.monitor).subscribe({
      next:()=>this.r.navigateByUrl("/monitor/"+this.monitor),
      error:()=>console.log("ha habido un error"),
    })
  }

}
