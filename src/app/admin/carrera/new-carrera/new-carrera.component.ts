import { Component, OnInit } from '@angular/core';
import {CarreraService} from "../shared/carrera.service";
import {Router} from "@angular/router";
import {Carrera} from "../shared/carrera.model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-new-carrera',
  templateUrl: './new-carrera.component.html',
  styleUrls: ['./new-carrera.component.css']
})
export class NewCarreraComponent implements OnInit {


  constructor(public carreraService: CarreraService, private router: Router) {}

  ngOnInit(): void {
  }

  createCarrera(carrera: Carrera){
    this.carreraService.createCarrera(carrera).subscribe(()=>{
        this.router.navigate(['admin/carreras']);
        Swal.fire({
          icon: 'success',
          title: 'La carrera se ha creado con éxito',
          showConfirmButton: false,
          timer: 1500
        })
      },
      (error:any)=>{
        Swal.fire({
          title:"La carrera no se ha podido crear",
          text:"Ha ocurrido un error al intentar crear este elemento’",
          icon:"error",
        })
      }
    )
  }

}
