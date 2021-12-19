import { Component, OnInit } from '@angular/core';
import {Universidad} from "../../universidad/shared/universidad.model";
import {SedeService} from "../../sede/shared/sede.service";
import {UniversidadService} from "../../universidad/shared/universidad.service";
import {Router} from "@angular/router";
import {Sede} from "../../sede/shared/sede.model";
import Swal from "sweetalert2";
import {CarreraService} from "../../carrera/shared/carrera.service";
import {EgresadoService} from "../shared/egresado.service";
import {Carrera} from "../../carrera/shared/carrera.model";
import {Egresado} from "../shared/egresado.model";

@Component({
  selector: 'app-new-egresado',
  templateUrl: './new-egresado.component.html',
  styleUrls: ['./new-egresado.component.css']
})
export class NewEgresadoComponent implements OnInit {

  selectedCarrera: number;
  selectedSede: number;

  sedes: Sede[];
  carreras: Carrera[];

  constructor(private egresadoService: EgresadoService ,private sedeService: SedeService, private carreraService: CarreraService, private router: Router) { }

  ngOnInit(): void {
    this.getAllSedes();
    this.getAllCarreras();
  }

  getAllSedes(){
    this.sedeService.getAllSedes().subscribe((data : any)=> {
      this.sedes = data;
    })
  }
  getAllCarreras(){
    this.carreraService.getAllCarreras().subscribe((data : any)=>{
      this.carreras = data;
    })
  }


  createSede(egresado: Egresado){
    this.egresadoService.createEgresado(egresado, this.selectedSede, this.selectedCarrera).subscribe(()=>{
        this.router.navigate(['admin/egresados']);
        Swal.fire({

          icon: 'success',
          title: 'El egresado se ha creado con éxito',
          showConfirmButton: false,
          timer: 1500
        })
      },
      (error:any)=>{
        Swal.fire({
          title:"El egresado no se ha podido crear",
          text:"Ha ocurrido un error al intentar crear este elemento’",
          icon:"error",
        })
      }
    )
  }

}
