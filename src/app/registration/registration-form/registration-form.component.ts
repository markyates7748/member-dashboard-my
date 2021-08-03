import {
  AfterViewInit,
  Component,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.sass']
})
export class RegistrationFormComponent implements AfterViewInit {

  angleRight = faAngleRight;

  @ViewChildren(TemplateRef)
  templates?: QueryList<TemplateRef<any>>;

  @ViewChild('formContainer', {read: ViewContainerRef})
  formContainer?: ViewContainerRef;

  currentTemplate = 0;

  landingPortalSignup: string;

  constructor() {
    this.landingPortalSignup = `${environment.application.landingPortal}/signup`;
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

}
