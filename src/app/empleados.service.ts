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

  actualizarServicio(indice:number, empleado:Empleado){
    let empleadoModificado = this.empleados[indice];
    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo  = empleado.cargo;
    empleadoModificado.salario = empleado.salario;
    this.servicioVentanaEmergente.muestraMensaje("Datos actualizados: "+ "\n" +
    empleado.nombre + "\n" + empleado.apellido + "\n" + empleado.cargo + "\n" + empleado.salario);
  }

  eliminarServicio(indice:number){
    let empleadoEliminar = this.empleados[indice];
    this.empleados.splice(indice, 1)
    this.servicioVentanaEmergente.muestraMensaje("El empleado"+ "\n" + empleadoEliminar.nombre + "" +
    empleadoEliminar.apellido + " ha sido eliminado.")
  }

  encontrarEmpleado(indice:number){
    let empleado:Empleado= this.empleados[indice];
    return empleado;
  }
}
