import {Component, OnInit} from '@angular/core';
import {Credentials} from '@core/model/credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  returning = false;

  constructor() { }

  handleLogin({username, password}: Credentials): void {
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
  }

  ngOnInit(): void {
    this.checkReturning();
  }

  checkReturning(): void {
    const visited = localStorage.getItem('visited');
    if (visited) this.returning = true;
    else {
      this.returning = false;
      localStorage.setItem('visited', 'true');
    }
  }


}
