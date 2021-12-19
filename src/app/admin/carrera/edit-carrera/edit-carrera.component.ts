import { Component, OnInit } from '@angular/core';
import {Carrera} from "../shared/carrera.model";
import {CarreraService} from "../shared/carrera.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit-carrera',
  templateUrl: './edit-carrera.component.html',
  styleUrls: ['./edit-carrera.component.css']
})
export class EditCarreraComponent implements OnInit {

  carreraLocal= new Carrera();
  idCarrera: any;

  constructor(private carreraSerrvice: CarreraService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.idCarrera = this.activatedRoute.snapshot.paramMap.get('id');
  }



  ngOnInit(): void {
    this.getCarreraById();

  }

  getCarreraById(){
    this.carreraSerrvice.getCarreraById(this.idCarrera).subscribe((data:any)=>{
      this.carreraLocal= data;
      console.log(data)
    })
  }


  upadteCarrera(carrera: Carrera){
    carrera.idCarrera= this.carreraLocal.idCarrera;
    this.carreraSerrvice.updateCarrera(carrera).subscribe((data: any)=>{
      this.router.navigate(['admin/carreras']);
      Swal.fire({
        icon: 'success',
        title: 'La carrera se ha actualizado con éxito',
        showConfirmButton: false,
        timer: 1500
      }),

        (error:any)=>{
          Swal.fire({
            title:"La carrera no se ha podido actualizar",
            text:"Ha ocurrido un error al intentar actualizar este elemento’",
            icon:"error",
          })
        }
    })
  }

}
