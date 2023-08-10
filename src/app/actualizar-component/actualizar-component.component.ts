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

  accion:number;
  empleados:Empleado[]=[];

  ngOnInit(): void {

    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

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

  accionEmpleado(){
    if(this.accion==1){

      let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      this.empleadosService.actualizarServicio(this.indice ,miEmpleado);
      this.volverHome()

    } else{
        this.empleadosService.eliminarServicio(this.indice);
        this.volverHome()
    }
  }

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;
  indice:number;
}
