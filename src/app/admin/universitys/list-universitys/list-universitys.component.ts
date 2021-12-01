import { Component, OnInit } from '@angular/core';
import { UniversitysService } from '../shared/universitys.service';

@Component({
  selector: 'app-list-universitys',
  templateUrl: './list-universitys.component.html',
  styleUrls: ['./list-universitys.component.css']
})
export class ListUniversitysComponent implements OnInit {

  constructor(private universityService:UniversitysService) { }
 
  ngOnInit(): void {

  }

}
