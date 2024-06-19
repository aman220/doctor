import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  standalone: true,
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Diagnostic Code</h4>
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      ></button>
    </div>
    <div class="modal-body">
      <p>Code : {{ name }}</p>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-secondary"
        (click)="activeModal.close('Close click')"
      >
        Close
      </button>
    </div>
    <style>
      .btn-primary {
        margin: 20px;
      }
      .modal-header {
        background-color: #39ce96;
        color: #ffffff;
      }
      .modal-footer {
        background-color: #f8f9fa;
      }
      .modal-body p{
        font-weight: bold;
      }
    </style>
  `,
})
export class DiagnosComponent {
  activeModal = inject(NgbActiveModal);

  @Input() name: string | undefined;
}

@Component({
  selector: 'ngbd-modal-component',
  standalone: true,
  templateUrl: './diagnos.component.html',
})
export class NgbdModalComponent {
  private modalService = inject(NgbModal);
}
