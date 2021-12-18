import { Component, OnInit } from '@angular/core';
import {Carrera} from "../../carrera/shared/carrera.model";
import {CarreraService} from "../../carrera/shared/carrera.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {Universidad} from "../shared/universidad.model";
import {UniversidadService} from "../shared/universidad.service";

@Component({
  selector: 'app-edit-universidad',
  templateUrl: './edit-universidad.component.html',
  styleUrls: ['./edit-universidad.component.css']
})
export class EditUniversidadComponent implements OnInit {

  UniversidadLocal= new Universidad();
  idUniversidad: any;

  constructor(private universidadService: UniversidadService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.idUniversidad = this.activatedRoute.snapshot.paramMap.get('id');
  }



  ngOnInit(): void {
    this.getCarreraById();

  }

  getCarreraById(){
    this.universidadService.getUniversidadById(this.idUniversidad).subscribe((data:any)=>{
      this.UniversidadLocal= data;
      console.log(data)
    })
  }


  upadteUniversidad(universidad: Universidad){
    universidad.idUniversidad= this.UniversidadLocal.idUniversidad;
    this.universidadService.updateUniversidad(universidad).subscribe((data: any)=>{
      this.router.navigate(['admin/universidades']);
      Swal.fire({
        icon: 'success',
        title: 'La universidad se ha actualizado con éxito',
        showConfirmButton: false,
        timer: 1500
      }),

        (error:any)=>{
          Swal.fire({
            title:"La universidad no se ha podido actualizar",
            text:"Ha ocurrido un error al intentar actualizar este elemento’",
            icon:"error",
          })
        }
    })
  }
}
