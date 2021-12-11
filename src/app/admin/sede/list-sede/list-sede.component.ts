import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Sede} from "../shared/sede.model";
import {SedeService} from "../shared/sede.service";

@Component({
  selector: 'app-list-sedes',
  templateUrl: './list-sede.component.html',
  styleUrls: ['./list-sede.component.css']
})
export class ListSedeComponent implements OnInit {

  displayedColumns: string[] = ['idSede', 'ubicacion', 'direccion', 'edit', 'delete'];
  dataSource_sedes: MatTableDataSource<Sede>;

  constructor(private sedeService: SedeService) {}

  ///Todo lo que pongamos acá será ejecutado luego del constructor, antes de ser renderizado/montaje.
  ngOnInit(): void {
    this.getAllSedes();
  }

  getAllSedes(){
    this.sedeService.getAllSedes().subscribe((data : any)=> {
      this.dataSource_sedes= new MatTableDataSource(data);
      console.log(data)
      console.log("asdasd")
    })
  }

  applyFilter(value: string) {
    this.dataSource_sedes.filter = value.trim().toLowerCase();
  }

  delete(id: number) {
    const ok = confirm("¿Estás seguro que quieres eliminar este elemento?")

    if (ok) {

      this.sedeService.getSedeById(id).subscribe(() => {
        this.ngOnInit();
      })
    }
  }

}
