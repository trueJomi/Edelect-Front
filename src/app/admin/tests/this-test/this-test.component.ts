import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pregunta, Test } from '../shared/test.model';
import { TestService } from '../shared/test.service';

@Component({
  selector: 'app-this-test',
  templateUrl: './this-test.component.html',
  styleUrls: ['./this-test.component.css']
})
export class ThisTestComponent implements OnInit {


  id:number;
  datos:Test;
  
  constructor(private route:ActivatedRoute,private testService:TestService) { }


  ngOnInit(): void {
    this.getparametros();
    console.log(this.id);
    this.getById(this.id)
    console.log(this.datos);

  }

  getparametros(){
    this.route.paramMap.subscribe((param)=>{
        this.id=parseInt(param.get('id')|| '0');
    });
  }

  getById(id:number){
    this.testService.buscarTestById(id).subscribe((data:any)=>{
      this.datos=data.body
    });
  }
}
