import {NgModule} from '@angular/core';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faAngleRight, faInfoCircle, faUserCheck, faUserPlus} from '@fortawesome/free-solid-svg-icons';

const icons: IconDefinition[] = [
  faAngleRight,
  faUserCheck,
  faUserPlus,
  faInfoCircle
];

@NgModule({
  declarations: [],
  imports: [
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class AppIconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(...icons);
  }
}
