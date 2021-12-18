import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {UniversidadService} from "../shared/universidad.service";
import Swal from "sweetalert2";
import {Universidad} from "../shared/universidad.model";

@Component({
  selector: 'app-list-universidad',
  templateUrl: './list-universidad.component.html',
  styleUrls: ['./list-universidad.component.css']
})
export class ListUniversidadComponent implements OnInit {

  displayedColumns: string[] = ['idUniversidad', 'name', 'tipoGestion','editar', 'delete'];
  dataSource_universidad: MatTableDataSource<Universidad>;

  constructor(private universidadService: UniversidadService) { }

  ngOnInit(): void {
    this.getAllUniversidades();
  }
  getAllUniversidades(){
    this.universidadService.getAllUniversidades().subscribe((data : any)=> {
      this.dataSource_universidad= new MatTableDataSource(data);
      console.log(data)
    })
  }
  applyFilter(value: string) {
    this.dataSource_universidad.filter = value.trim().toLowerCase();
  }

  deleteUniversidad(id: number) {
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
        this.universidadService.deleteUniversidad(id).subscribe(() => {
          this.ngOnInit();
          Swal.fire({
            icon: 'success',
            title: 'La universidad se ha eliminado',
            showConfirmButton: false,
            timer: 1500
          })
        }, (error: any) => {
          Swal.fire({
            title: "Universidad no borrada",
            text: "Ha ocurrido un error al intentar borrar este elemento’",
            icon: "error",
          })
        })
      }
    })
  }
}
