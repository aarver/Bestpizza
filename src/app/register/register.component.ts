import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  email: string = '';
  password: string = '';

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    if (this.email == '') {
      alert('Ird be az email címed');
      return;
    }

    if (this.password == '') {
      alert('Ird be a jelszavad');
      return;
    }

    this.auth.register(this.email, this.password);
    
  }


}

