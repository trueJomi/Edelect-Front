import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Sede} from "../shared/sede.model";
import {SedeService} from "../shared/sede.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-sede',
  templateUrl: './list-sede.component.html',
  styleUrls: ['./list-sede.component.css']
})
export class ListSedeComponent implements OnInit {

  displayedColumns: string[] = ['idSede', 'nombreUniversidad', 'ubicacion', 'edit', 'delete'];
  dataSource_sede: MatTableDataSource<Sede>;

  constructor(private sedeService: SedeService) { }
  ngOnInit(): void {
    this.getAllSedes();
  }

  getAllSedes(){
    this.sedeService.getAllSedes().subscribe((data : any)=> {
      this.dataSource_sede= new MatTableDataSource(data);
      console.log(data)
    })
  }

  applyFilter(value: string) {
    this.dataSource_sede.filter = value.trim().toLowerCase();
  }

  delete(id: number) {
    Swal.fire({
      title: 'Estas Seguro',
      text:'Esto no se puede deshacer',
      icon:'question',
      showCancelButton:true,
      confirmButtonText:'Si, Borralo',
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
    }).then(respuesta => {

      if(respuesta.value){
        this.sedeService.deleteSede(id).subscribe(() => {
          this.ngOnInit();
          Swal.fire({
            icon: 'success',
            title: 'La sede se ha eliminado',
            showConfirmButton: false,
            timer: 1500
          })
        },(error:any)=>{+
          Swal.fire({
            title:"Sede no borrada",
            text:"Ha ocurrido un error al intentar borrar este elemento’",
            icon:"error",
          })
        })
      }

    })
  }

}
