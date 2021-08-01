import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Credentials} from '@core/model/credentials.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent {

  @Output()
  useCredentials: EventEmitter<Credentials>;

  loginForm: FormGroup;

  constructor() {
    const remember = localStorage.getItem('rememberUsername');
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      rememberUsername: new FormControl(
        remember ? JSON.parse(remember) : false)
    });

    this.useCredentials = new EventEmitter();
  }

  onSubmit(): void {
    const {rememberUsername} = this.loginForm.value;
    if (rememberUsername) {
      localStorage.setItem('rememberUsername', JSON.stringify(rememberUsername));
    } else {
      localStorage.removeItem('rememberUsername');
    }
    this.useCredentials.emit(this.loginForm.value);
  }

}
