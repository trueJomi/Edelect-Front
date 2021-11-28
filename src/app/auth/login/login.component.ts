import { Component, OnInit } from '@angular/core';
import { faKey } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faKey= faKey;

  constructor() { }

  ngOnInit(): void {
  }

}
