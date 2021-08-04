import {Injectable} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {GlobalModalState} from '@app/global-modal/global-modal.state';
import {GlobalModalOptions} from '@app/global-modal/global-modal-options';

@Injectable()
export class GlobalModalService {

  constructor(private modalService: NgbModal, private state: GlobalModalState) { }

  public show(options: GlobalModalOptions): void {
    this.state.options = options;
    this.state.modal = this.modalService.open(this.state.template);
  }


}
