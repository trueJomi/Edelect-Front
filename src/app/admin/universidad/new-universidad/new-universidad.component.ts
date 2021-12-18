import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {UniversidadService} from "../shared/universidad.service";
import {Universidad} from "../shared/universidad.model";

@Component({
  selector: 'app-new-universidad',
  templateUrl: './new-universidad.component.html',
  styleUrls: ['./new-universidad.component.css']
})
export class NewUniversidadComponent implements OnInit {

  constructor(public universidadService: UniversidadService, private router: Router) {}

  ngOnInit(): void {
  }

  createCarrera(universidad: Universidad){
    this.universidadService.createUniversidad(universidad).subscribe(()=>{
        this.router.navigate(['admin/universidades']);
        Swal.fire({
          icon: 'success',
          title: 'La universidad se ha creado con éxito',
          showConfirmButton: false,
          timer: 1500
        })
      },
      (error:any)=>{
        Swal.fire({
          title:"La universidad no se ha podido crear",
          text:"Ha ocurrido un error al intentar crear este elemento’",
          icon:"error",
        })
      }
    )
  }
}
