import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Sede} from "../sede.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SedeService} from "../sede.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-sede',
  templateUrl: './form-sede.component.html',
  styleUrls: ['./form-sede.component.css']
})
export class FormSedeComponent implements OnInit {

  form: FormGroup;

  @Input() sede:Sede= new Sede();
  @Output() onSubmit: EventEmitter<any>= new EventEmitter();
  constructor(private productService: SedeService, private formBuilder:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      title:[
        this.sede.universidad,[
          Validators.required
        ]
      ],
      direccion:[
        this.sede.direccion,[
          Validators.required,
          Validators.minLength(5),
        ]
      ],
      ubicacion:[
        this.sede.ubicacion,[
          Validators.required,
          Validators.minLength(5),
        ]
      ]
    })
  }


  save(){
    this.onSubmit.emit(this.form.value)
  }


}
