import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService){}
  empleados:Empleado[]=[
    new Empleado("Juan","Diaz","Presidente",5000),
    new Empleado("Ana","Sánchez","Recepción",1000),
    new Empleado("Alberto","Balotelli","Ventas",3500),
    new Empleado("Juana","Contreras","Auxiliar contable",2800),

  ];



  agregarEmpleadoServicio(empleado:Empleado){

    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: "+ "\n" +
    empleado.nombre + "\n" + "Salario: "+ empleado.salario);
    this.empleados.push(empleado);

  }

  actualizarServicio(empleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Datos actualizados: "+ "\n" +
    empleado.nombre + "\n" + empleado.apellido + "\n" + empleado.cargo + "\n" + empleado.salario);
  }
  encontrarEmpleado(indice:number){
    let empleado:Empleado= this.empleados[indice];
    return empleado;
  }
}
