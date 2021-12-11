import { Component, OnInit } from '@angular/core';
import {TestService} from "../shared/test.service";

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  constructor(private testService:TestService) { }

  ngOnInit(): void {
    this.getAllTest()
  }
  getAllTest(){
    this.testService.getAllTest().subscribe((data)=>{
      console.log(data)
    });
  }
}
