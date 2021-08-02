import {Component} from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div class="d-flex flex-row justify-content-center font-noto-sans">
      <div class="fs-1 text-primary animate__animated animate__flipInX">Aline</div>
      <img src="../../assets/images/logo.svg"
           class="logo animate__animated animate__flipInY animate__delay-half-second"
           draggable="false"
           alt="$"/>
      <div class="fs-1 text-light animate__animated animate__flipInX">Financial</div>
    </div>
  `,
  styleUrls: [
    './logo.component.sass'
  ]
})
export class LogoComponent {}
