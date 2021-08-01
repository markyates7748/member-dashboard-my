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
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });

    this.useCredentials = new EventEmitter();
  }

  onSubmit(): void {
    this.useCredentials.emit(this.loginForm.value);
  }

}
