import { Component, OnInit } from '@angular/core';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  faKey = faKey;

  constructor(private authSer: AuthService) {}

  ngOnInit(): void {
    const data = {
      idUsuario: 1,
      userName: 'pixgel',
      nombre: '',
      apellido: '',
      correo: '',
      contrasena: 'hola13040',
      coment: [],
      tests: [],
    };

    // this.authSer.login(data).subscribe((res) =>console.log(res))
  }
}
