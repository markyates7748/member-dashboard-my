import {AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.sass']
})
export class RegistrationFormComponent implements AfterViewInit {

  @ViewChild('getStarted', {read: TemplateRef})
  getStarted!: TemplateRef<any>;

  @ViewChild('membershipCheck', {read: TemplateRef})
  membershipCheck!: TemplateRef<any>;

  @ViewChild('lookUp', {read: TemplateRef})
  lookUp!: TemplateRef<any>;

  @ViewChild('formContainer', {read: ViewContainerRef})
  formContainer!: ViewContainerRef;

  templates?: TemplateRef<any>[];

  currentTemplate = 0;

  ngAfterViewInit(): void {
    this.setCurrentTemplate();
  }

  setCurrentTemplate() {
    this.templates = [
      this.getStarted,
      this.membershipCheck,
      this.lookUp
    ];
    this.formContainer.clear();
    this.formContainer.createEmbeddedView(this.templates[this.currentTemplate]);
  }

  nextTemplate(): void {
    if (this.currentTemplate < this.templates!.length - 1) {
      this.currentTemplate++;
      this.setCurrentTemplate();
    }
  }

  prevTemplate(): void {
    if (this.currentTemplate > 0) {
      this.currentTemplate--;
      this.setCurrentTemplate();
    }
  }

}
