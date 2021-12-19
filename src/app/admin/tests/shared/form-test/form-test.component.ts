import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Test } from '../test.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
  form: FormGroup;
  
  @Input() test:Test =new Test

  
  constructor(
    private formBuilder:FormBuilder,
    private testService:TestService,
    private router:Router
  ) { }

  ngOnInit(): void {

  }

}
