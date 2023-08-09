import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualizar-component',
  templateUrl: './actualizar-component.component.html',
  styleUrls: ['./actualizar-component.component.css']
})
export class ActualizarComponentComponent implements OnInit{
  titulo = 'app empleados';



  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService, private route:ActivatedRoute){}

  empleados:Empleado[]=[];

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'];

    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo= empleado.cargo;
    this.cuadroSalario= empleado.salario;
  }



  volverHome(){
    this.router.navigate(['']);
  }

  actualizarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadosService.actualizarServicio(this.indice ,miEmpleado);
    this.router.navigate(['']);
  }

  eliminarEmpleado(){
    this.empleadosService.eliminarServicio(this.indice);
    this.router.navigate(['']);
  }

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;
  indice:number;
}
