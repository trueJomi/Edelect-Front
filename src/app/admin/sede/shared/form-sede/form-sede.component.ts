import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Universidad} from "../../../universidad/shared/universidad.model";
import {UniversidadService} from "../../../universidad/shared/universidad.service";
import {Router} from "@angular/router";
import {Sede} from "../sede.model";
import {SedeService} from "../sede.service";

@Component({
  selector: 'app-form-sede',
  templateUrl: './form-sede.component.html',
  styleUrls: ['./form-sede.component.css']
})
export class FormSedeComponent implements OnInit {

  form: FormGroup;

  @Input() sede:Sede= new Sede();
  @Output() onSubmit: EventEmitter<any>= new EventEmitter();
  constructor(private sedeService: SedeService, private formBuilder:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      ubicacion:[
        this.sede.ubicacion,[
          Validators.required,
          Validators.minLength(3),
        ]
      ],
      direccion:[
        this.sede.direccion,[
          Validators.required,
          Validators.minLength(3),
        ]
      ],
    })
  }


  save(){
    this.onSubmit.emit(this.form.value)
  }

}
