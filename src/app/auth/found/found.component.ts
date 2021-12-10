import { Component, OnInit } from '@angular/core';
import { faKey } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.css']
})
export class FoundComponent implements OnInit {

  faKey= faKey;
  
  constructor() { }

  ngOnInit(): void {
  }

}
