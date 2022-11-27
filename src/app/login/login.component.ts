import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) { }


  ngOnInit(): void {
  }

  login() {
    if (this.email == '') {
      alert('Ird be az email címed');
      return;
    }

    if (this.password == '') {
      alert('Ird be a jelszavad');
      return;
    }

    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
    
  }


}

