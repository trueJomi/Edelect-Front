import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/auth/shared/usuario.model';
import { PlantillaService } from '../plantilla.service';
import { Carrera, Plantilla, Pregunta, Respuesta } from '../test.model';


@Component({
  selector: 'app-from-plantilla',
  templateUrl: './from-plantilla.component.html',
  styleUrls: ['./from-plantilla.component.css']
})
export class FromPlantillaComponent implements OnInit {

  form:FormGroup;
  PreguntasCreadas:Pregunta[];
  carreras:Carrera[];

  myControlCarreraa= new FormControl();
  carreraFiltrado:Observable<String>;

  @Output() onSave: EventEmitter<any> = new EventEmitter();

  constructor(
    private plantillaService:PlantillaService
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      usuario: new FormControl(),
      preguntas: new FormControl(),
    })
  }

  agregarProducto() {
    if (this.form.value['producto']) {
      let newPregunta = new Pregunta();
      newPregunta.contenido = this.form.value['producto'];
      newPregunta.respuesta = this.form.value['quantity'];
      this.PreguntasCreadas.push(newPregunta);
    }
  }

  // save() {
  //   let plantilla = new Plantilla();
  //   plantilla.preguntas = Pregunta;
  //   this.onSave.emit(order);
  // }
}
