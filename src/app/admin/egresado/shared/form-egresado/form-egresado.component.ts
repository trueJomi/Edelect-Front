import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SedeService} from "../../../sede/shared/sede.service";
import {Router} from "@angular/router";
import {Egresado} from "../egresado.model";

@Component({
  selector: 'app-form-egresado',
  templateUrl: './form-egresado.component.html',
  styleUrls: ['./form-egresado.component.css']
})
export class FormEgresadoComponent implements OnInit {

  form: FormGroup;

  @Input() egresado:Egresado= new Egresado();

  @Output() onSubmit: EventEmitter<any>= new EventEmitter();
  constructor(private formBuilder:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      nombreEgresado:[
        this.egresado.nombreEgresado,[
          Validators.required,
          Validators.minLength(3),
        ]
      ],
      curriculum:[
        this.egresado.curriculum,[
          Validators.required,
          Validators.minLength(3),
        ]
      ],
      fotoEgresado:[
        this.egresado.fotoEgresado,[
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
