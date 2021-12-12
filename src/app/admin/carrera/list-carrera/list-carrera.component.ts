import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Sede} from "../../sede/shared/sede.model";
import {SedeService} from "../../sede/shared/sede.service";
import {CarreraService} from "../shared/carrera.service";

@Component({
  selector: 'app-list-carrera',
  templateUrl: './list-carrera.component.html',
  styleUrls: ['./list-carrera.component.css']
})
export class ListCarreraComponent implements OnInit {

  displayedColumns: string[] = ['idCarrera', 'nombreCarrera', 'descripcionDeCarrera', 'edit', 'delete'];
  dataSource_carrera: MatTableDataSource<Sede>;

  constructor(private carreraService: CarreraService) {}

  ///Todo lo que pongamos acá será ejecutado luego del constructor, antes de ser renderizado/montaje.
  ngOnInit(): void {
    this.getAllSedes();
  }

  getAllSedes(){
    this.carreraService.getAllCarreras().subscribe((data : any)=> {
      this.dataSource_carrera= new MatTableDataSource(data);
      console.log(data)
      console.log("asdasd")
    })
  }

  applyFilter(value: string) {
    this.dataSource_carrera.filter = value.trim().toLowerCase();
  }

  delete(id: number) {
    const ok = confirm("¿Estás seguro que quieres eliminar este elemento?")

    if (ok) {

      this.carreraService.getCarreraById(id).subscribe(() => {
        this.ngOnInit();
      })
    }
  }

}
