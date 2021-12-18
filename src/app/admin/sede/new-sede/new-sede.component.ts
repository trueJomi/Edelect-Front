import { Component, OnInit } from '@angular/core';
import {SedeService} from "../shared/sede.service";
import {Sede} from "../shared/sede.model";
import {Universidad} from "../../universidad/shared/universidad.model";
import {UniversidadService} from "../../universidad/shared/universidad.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-sede',
  templateUrl: './new-sede.component.html',
  styleUrls: ['./new-sede.component.css']
})
export class NewSedeComponent implements OnInit {

  selectedValue: number;

  universidades: Universidad[];




  constructor(private sedeService: SedeService, private universidadService: UniversidadService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUniversidades();
  }

  getAllUniversidades(){
    this.universidadService.getAllUniversidades().subscribe((data : any)=> {
      this.universidades = data;
    })
  }


  createSede(sede: Sede){
    this.sedeService.createSede(sede, this.selectedValue).subscribe(()=>{
        this.router.navigate(['admin/sedes']);
        Swal.fire({
          icon: 'success',
          title: 'La sede se ha creado con éxito',
          showConfirmButton: false,
          timer: 1500
        })
      },
      (error:any)=>{
        Swal.fire({
          title:"La sede no se ha podido crear",
          text:"Ha ocurrido un error al intentar crear este elemento’",
          icon:"error",
        })
      }
    )
  }

}
