import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CarreraService} from "../shared/carrera.service";
import Swal from 'sweetalert2';
import {Carrera} from "../shared/carrera.model";


@Component({
  selector: 'app-list-carrera',
  templateUrl: './list-carrera.component.html',
  styleUrls: ['./list-carrera.component.css']
})
export class ListCarreraComponent implements OnInit {

  displayedColumns: string[] = ['idCarrera', 'nombreCarrera', 'descripcionDeCarrera', 'edit', 'delete'];
  dataSource_carrera: MatTableDataSource<Carrera>;

  constructor(private carreraService: CarreraService) {}

  ///Todo lo que pongamos acá será ejecutado luego del constructor, antes de ser renderizado/montaje.
  ngOnInit(): void {
    this.getAllCarreras();
  }

  getAllCarreras(){
    this.carreraService.getAllCarreras().subscribe((data : any)=> {
      this.dataSource_carrera= new MatTableDataSource(data);
      console.log(data)
    })
  }

  applyFilter(value: string) {
    this.dataSource_carrera.filter = value.trim().toLowerCase();
  }

  delete(id: number) {
    Swal.fire({
      title: 'Estas Seguro',
      text:'Esto no se puede deshacer',
      icon:'question',
      showCancelButton:true,
      confirmButtonText:'Si, Borrarlo',
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
  }).then(respuesta => {

      if(respuesta.value){
        this.carreraService.deleteCarrera(id).subscribe(() => {
          this.ngOnInit();
          Swal.fire({
            icon: 'success',
            title: 'La carrera se ha eliminado',
            showConfirmButton: false,
            timer: 1500
          })
        },(error:any)=>{
          Swal.fire({
            title:"Carrera no borrada",
            text:"Ha ocurrido un error al intentar borrar este elemento’",
            icon:"error",
          })
        })
      }

    })
  }
}
