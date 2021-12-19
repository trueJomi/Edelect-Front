import { Component, OnInit } from '@angular/core';
import { Universidad } from '../shared/universidad.model';
import {UniversidadService} from "../shared/universidad.service";
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-universidad-list',
  templateUrl: './universidad-list.component.html',
  styleUrls: ['./universidad-list.component.css']
})
export class UniversidadListComponent implements OnInit {
  displayedColumns: string[] = ['id','name', 'description','tipogestion','sede'];
  dataSource: MatTableDataSource<Universidad>;

  constructor(private universidadService:UniversidadService) { }

  ngOnInit(): void {
    this.getAllUniversidad()
    
  }

  getAllUniversidad(){
    this.universidadService.getAllUniversidad().subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data);
      console.log(data)
    });
  }

  applyFilter(value: Event) {
    const filterValue = (value.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
}
