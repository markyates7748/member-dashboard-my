import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {environment} from '@environments/environment';
import {RegistrationService} from '@core/services/registration.service';
import {FormControl, FormGroup, RequiredValidator, Validators} from '@angular/forms';
import {ValidatorFunctions} from '@core/validators/validator-functions';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.sass']
})
export class RegistrationFormComponent implements OnInit, AfterViewInit {

  @ViewChildren(TemplateRef)
  templates?: QueryList<TemplateRef<any>>;

  @ViewChild('formContainer', {read: ViewContainerRef})
  formContainer?: ViewContainerRef;

  currentTemplate = 0;

  landingPortalSignup: string;

  registrationForm!: FormGroup;
  registrationLoading = false;

  constructor(private service: RegistrationService) {
    this.landingPortalSignup = `${environment.application.landingPortal}/signup`;
  }

  ngOnInit(): void {
    const {
      usernameValidator,
      passwordValidator,
      membershipIdValidator,
      confirmPassword
    } = ValidatorFunctions;
    this.registrationForm = new FormGroup({
      membershipId: new FormControl('', [
        Validators.required,
        membershipIdValidator()
      ]),
      username: new FormControl('', [
        Validators.required,
        usernameValidator()
      ]),
      password: new FormControl('', [
        Validators.required,
        passwordValidator()
      ]),
      confirmPassword: new FormControl('', [
        Validators.required
      ])
    }, [
      confirmPassword()
    ]);
  }

  ngAfterViewInit(): void {
    this.setCurrentTemplate();
  }

  setCurrentTemplate() {
    if (this.templates && this.formContainer) {
      const temp = this.templates.get(this.currentTemplate);
      this.formContainer.clear();
      const embeddedView = this.formContainer.createEmbeddedView(temp!);
      embeddedView.detectChanges();
    }
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

  registerUser(): void {
    console.log(this.registrationForm.value);
  }

  disableForm(): void {
    this.registrationForm.disable();
  }

  enableForm(): void {
    this.registrationForm.enable();
  }

}
