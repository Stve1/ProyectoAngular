import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit{

  @Input() empleadoDeLista:Empleado;

  @Input() indice:number;

  constructor(private router:Router){}
  ngOnInit(): void {

  }

  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

}


