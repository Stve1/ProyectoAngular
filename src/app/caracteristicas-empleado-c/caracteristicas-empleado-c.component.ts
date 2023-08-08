import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService: EmpleadosService){}

  ngOnInit(): void {

  }

  agregarCaracteristicas(value:string) {
    this.miServicio.muestraMensaje("Característica: "+ value);
    this.caracteristicasEmpleados.emit(value);
  }
}
