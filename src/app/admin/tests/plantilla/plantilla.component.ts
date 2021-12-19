import { Component, OnInit } from '@angular/core';
import { PlantillaService } from '../shared/plantilla.service';
import { Pregunta } from '../shared/test.model';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {
  
  preguntas:Pregunta[];
  
  constructor(private plantillaService:PlantillaService) { }

  ngOnInit(): void {
    this.getPlantilla()
  }

  
  getPlantilla(){
    return this.plantillaService.obtenerPLantillaActual().subscribe((data:any)=>{
        this.preguntas=data.body.preguntas;
        
    })
  }
}
