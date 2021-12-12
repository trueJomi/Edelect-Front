import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Sede} from "../../sede/shared/sede.model";
import {EgresadoService} from "../shared/egresado.service";

@Component({
  selector: 'app-list-egresado',
  templateUrl: './list-egresado.component.html',
  styleUrls: ['./list-egresado.component.css']
})
export class ListEgresadoComponent implements OnInit {

  displayedColumns: string[] = ['idEgresado', 'nombreEgresado', 'curriculum', 'edit', 'delete'];
  dataSource_egresados: MatTableDataSource<Sede>;

  constructor(private egresadoService: EgresadoService) {}

  ///Todo lo que pongamos acá será ejecutado luego del constructor, antes de ser renderizado/montaje.
  ngOnInit(): void {
    this.getAllSedes();
  }

  getAllSedes(){
    this.egresadoService.getAllEgresados().subscribe((data : any)=> {
      this.dataSource_egresados= new MatTableDataSource(data);
      console.log(data)
    })
  }

  applyFilter(value: string) {
    this.dataSource_egresados.filter = value.trim().toLowerCase();
  }

  delete(id: number) {
    const ok = confirm("¿Estás seguro que quieres eliminar este elemento?")

    if (ok) {

      this.egresadoService.getSedeById(id).subscribe(() => {
        this.ngOnInit();
      })
    }
  }

}
