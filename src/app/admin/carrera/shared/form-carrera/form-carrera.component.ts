import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Carrera} from "../carrera.model";
import { CarreraService } from '../carrera.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-carrera',
  templateUrl: './form-carrera.component.html',
  styleUrls: ['./form-carrera.component.css']
})
export class FormCarreraComponent implements OnInit {

  form: FormGroup;

  @Input() carrera:Carrera= new Carrera();
  @Output() onSubmit: EventEmitter<any>= new EventEmitter();
  constructor(private carreraService: CarreraService, private formBuilder:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      nombreCarrera:[
        this.carrera.nombreCarrera,[
          Validators.required,
          Validators.minLength(3),
        ]
      ],
      descripcionDeCarrera:[
        this.carrera.descripcionDeCarrera,[
          Validators.required,
          Validators.minLength(5)
        ]
      ],
      salarioPromedio:[
        this.carrera.salarioPromedio,[
          Validators.required,
          Validators.min(1),
        ]
      ],
      tasaDeEmpleabilidad:[
        this.carrera.tasaDeEmpleabilidad,[
          Validators.required,
          Validators.min(1),
        ]
      ],
    })
  }


  save(){
    this.onSubmit.emit(this.form.value)
  }

}
