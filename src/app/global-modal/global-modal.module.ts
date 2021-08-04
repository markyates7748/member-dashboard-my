import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {GlobalModalDirective} from '@app/global-modal/global-modal.directive';
import {GlobalModalComponent} from '@app/global-modal/global-modal.component';
import {GlobalModalService} from '@app/global-modal/global-modal.service';
import {GlobalModalState} from '@app/global-modal/global-modal.state';


@NgModule({
  declarations: [
    GlobalModalDirective,
    GlobalModalComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    GlobalModalComponent,
    GlobalModalDirective
  ],
  providers: [
    GlobalModalService,
    GlobalModalState
  ]
})
export class GlobalModalModule { }
