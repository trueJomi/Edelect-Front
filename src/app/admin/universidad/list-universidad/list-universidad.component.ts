import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Universidad } from '../shared/universidad.model';
import { UniversidadService } from '../shared/universidad.service';

@Component({
  selector: 'app-list-universidad',
  templateUrl: './list-universidad.component.html',
  styleUrls: ['./list-universidad.component.css']
})
export class ListUniversidadComponent implements OnInit {
  displayedColumns: string[] = ['idUniversidad', 'name', 'descripcion', 'image','tipoGestion','sede','coments','actions'];
  dataSource: MatTableDataSource<Universidad>;
  constructor(private UniversidadService: UniversidadService) {}

  ngOnInit(): void {
    this.getAllUniversidad();
  }
  getAllUniversidad() {
    this.UniversidadService.getAllUniversidad().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data['body']);
    });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar el café?');
    if (ok) {
      this.UniversidadService.delete(id).subscribe(() => {
        this.getAllUniversidad();
      });
    }
  }
}
