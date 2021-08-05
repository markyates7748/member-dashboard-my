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
import {FormControl, FormGroup} from '@angular/forms';
import {MemberLookup} from '@core/models/member-lookup.model';

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

  lookUpForm!: FormGroup;

  lookUpLoading = false;

  constructor(private service: RegistrationService) {
    this.landingPortalSignup = `${environment.application.landingPortal}/signup`;
  }

  ngOnInit(): void {
    this.lookUpForm = new FormGroup({
      lastName: new FormControl(''),
      dateOfBirth: new FormControl(''),
      socialSecurity: new FormControl('')
    });
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

  submitLookUp(): void {
    this.lookUpLoading = true;
    this.disableForm();
    const lookUp: MemberLookup = this.lookUpForm.value;
    this.service.lookUpMember(lookUp)
      .subscribe(
        found => {
          this.lookUpLoading = false;
          this.enableForm();
          console.log(found);
        },
        () => {
          this.enableForm();
          this.lookUpLoading = false;
        });
  }

  disableForm(): void {
    this.lookUpForm.disable();
  }

  enableForm(): void {
    this.lookUpForm.enable();
  }

}
