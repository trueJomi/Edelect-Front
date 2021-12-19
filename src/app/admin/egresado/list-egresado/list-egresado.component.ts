import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {EgresadoService} from "../shared/egresado.service";
import {Egresado} from "../shared/egresado.model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-egresado',
  templateUrl: './list-egresado.component.html',
  styleUrls: ['./list-egresado.component.css']
})
export class ListEgresadoComponent implements OnInit {

  displayedColumns: string[] = ['idEgresado', 'nombreEgresado', 'Carrera','Universidad', 'edit', 'delete'];
  dataSource_egresados: MatTableDataSource<Egresado>;

  constructor(private egresadoService: EgresadoService) {}

  ///Todo lo que pongamos acá será ejecutado luego del constructor, antes de ser renderizado/montaje.
  ngOnInit(): void {
    this.getAllEgresados();
  }

  getAllEgresados(){
    this.egresadoService.getAllEgresados().subscribe((data : any)=> {
      this.dataSource_egresados= new MatTableDataSource(data);
      console.log(data)
    })
  }

  applyFilter(value: string) {
    this.dataSource_egresados.filter = value.trim().toLowerCase();
  }

  deleteEgresado(id: number) {
    Swal.fire({
      title: 'Estás Seguro ',
      text: 'Asegurate que otros datos no dependan de él',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, Borralo',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then(respuesta => {
      if(respuesta.value) {
        this.egresadoService.deleteEgresado(id).subscribe(() => {
          this.ngOnInit();
          Swal.fire({
            icon: 'success',
            title: 'El egresado se ha eliminado',
            showConfirmButton: false,
            timer: 1500
          })
        }, (error: any) => {
          Swal.fire({
            title: "Egresado no borrada",
            text: "Ha ocurrido un error al intentar borrar este elemento’",
            icon: "error",
          })
        })
      }
    })
  }

}
