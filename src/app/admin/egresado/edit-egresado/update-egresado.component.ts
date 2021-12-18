import { Component, OnInit } from '@angular/core';
import {Sede} from "../../sede/shared/sede.model";
import {Universidad} from "../../universidad/shared/universidad.model";
import {SedeService} from "../../sede/shared/sede.service";
import {UniversidadService} from "../../universidad/shared/universidad.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {Egresado} from "../shared/egresado.model";
import {Carrera} from "../../carrera/shared/carrera.model";
import {CarreraService} from "../../carrera/shared/carrera.service";
import {EgresadoService} from "../shared/egresado.service";

@Component({
  selector: 'app-edit-egresado',
  templateUrl: './update-egresado.component.html',
  styleUrls: ['./update-egresado.component.css']
})
export class UpdateEgresadoComponent implements OnInit {

  egresadoLocal= new Egresado();
  idEgresado: any;
  sedes: Sede[];
  carreras: Carrera[];
  selectedSede: number;
  selectedCarrera: number;


  constructor(private egresadoService:EgresadoService ,private sedeService: SedeService,private carreraService: CarreraService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.idEgresado = this.activatedRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getCarreraById();
    this.getAllCarreras();
    this.getAllsedes();
  }

  getCarreraById(){
    this.egresadoService.getEgresadoById(this.idEgresado).subscribe((data:any)=>{
      this.egresadoLocal= data;
      console.log(data)
    })
  }

  getAllsedes(){
    this.sedeService.getAllSedes().subscribe((data : any)=> {
      this.sedes = data;
    })
  }

  getAllCarreras(){
    this.carreraService.getAllCarreras().subscribe((data : any)=> {
      this.carreras = data;
    })
  }




  updateSede(egresado: Egresado){
    egresado.idEgresado= this.egresadoLocal.idEgresado;
    this.egresadoService.updateEgresado(egresado, this.selectedSede, this.selectedCarrera).subscribe((data: any)=>{
      this.router.navigate(['admin/egresados']);
      Swal.fire({
        icon: 'success',
        title: 'El egresado se ha actualizado con éxito',
        showConfirmButton: false,
        timer: 1500
      }),

        (error:any)=>{
          Swal.fire({
            title:"El egresado no se ha podido actualizar",
            text:"Ha ocurrido un error al intentar actualizar este elemento’",
            icon:"error",
          })
        }
    })
  }
}
