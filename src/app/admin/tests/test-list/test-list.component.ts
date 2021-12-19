import { Component, OnInit, ɵfindLocaleData } from '@angular/core';
import { Carrera, Test } from '../shared/test.model';
import {TestService} from "../shared/test.service";
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})



export class TestListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'description','fecha','usuario','acciones'];
  dataSource: MatTableDataSource<Test>;


  constructor(private testService:TestService) { }

  ngOnInit(): void {
    this.getAllTest()
    
  }

  getAllTest(){
    return this.testService.getAllTest().subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data.body);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar el test?');
    if (ok) {
      this.testService.deleteTest(id).subscribe(() => {
        this.getAllTest();
      });
    }
  }
}
