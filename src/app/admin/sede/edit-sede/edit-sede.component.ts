import { Component, OnInit } from '@angular/core';
import {Carrera} from "../../carrera/shared/carrera.model";
import {CarreraService} from "../../carrera/shared/carrera.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {SedeService} from "../shared/sede.service";
import {Sede} from "../shared/sede.model";
import {Universidad} from "../../universidad/shared/universidad.model";
import {UniversidadService} from "../../universidad/shared/universidad.service";

@Component({
  selector: 'app-edit-sede',
  templateUrl: './edit-sede.component.html',
  styleUrls: ['./edit-sede.component.css']
})
export class EditSedeComponent implements OnInit {

  sedeLocal= new Sede();
  idSede: any;
  universidades: Universidad[];
  selectedValue: number;


  constructor(private sedeService: SedeService,private universidadService: UniversidadService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.idSede = this.activatedRoute.snapshot.paramMap.get('id');
  }



  ngOnInit(): void {
    this.getCarreraById();
    this.getAllUniversidades();

  }

  getCarreraById(){
    this.sedeService.getSedeById(this.idSede).subscribe((data:any)=>{
      this.sedeLocal= data;
      console.log(data)
    })
  }

  getAllUniversidades(){
    this.universidadService.getAllUniversidades().subscribe((data : any)=> {
      this.universidades = data;
    })
  }




  updateSede(sede: Sede){
    sede.idSede= this.sedeLocal.idSede;
    this.sedeService.updateSede(sede, this.selectedValue).subscribe((data: any)=>{
      this.router.navigate(['admin/sedes']);
      Swal.fire({
        icon: 'success',
        title: 'La sede se ha actualizado con éxito',
        showConfirmButton: false,
        timer: 1500
      }),

        (error:any)=>{
          Swal.fire({
            title:"La sede no se ha podido actualizar",
            text:"Ha ocurrido un error al intentar actualizar este elemento’",
            icon:"error",
          })
        }
    })
  }
}
