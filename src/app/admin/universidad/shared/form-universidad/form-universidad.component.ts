import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CarreraService} from "../../../carrera/shared/carrera.service";
import {Router} from "@angular/router";
import {Universidad} from "../universidad.model";
import {UniversidadService} from "../universidad.service";

@Component({
  selector: 'app-form-universidad',
  templateUrl: './form-universidad.component.html',
  styleUrls: ['./form-universidad.component.css']
})
export class FormUniversidadComponent implements OnInit {

  form: FormGroup;

  @Input() universidad:Universidad= new Universidad();
  @Output() onSubmit: EventEmitter<any>= new EventEmitter();
  constructor(private universidadService: UniversidadService, private formBuilder:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      name:[
        this.universidad.name,[
          Validators.required,
          Validators.minLength(3),
        ]
      ],
      description:[
        this.universidad.description,[
          Validators.required,
          Validators.minLength(3),
        ]
      ],
      tipoGestion:[
        this.universidad.tipoGestion,[
          Validators.required,
          Validators.minLength(5)
        ]
      ],
      image:[
        this.universidad.image,[
          Validators.required,
          Validators.minLength(5),
        ]
      ],
    })
  }


  save(){
    this.onSubmit.emit(this.form.value)
  }

}
