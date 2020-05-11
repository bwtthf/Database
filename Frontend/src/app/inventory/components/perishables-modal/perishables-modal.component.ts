import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-perishables-modal',
  templateUrl: './perishables-modal.component.html',
  styleUrls: ['./perishables-modal.component.scss']
})
export class PerishablesModalComponent implements OnInit {

  @Input() public perishablesItem;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  submitForm() {
    this.passEntry.emit(this.perishablesItem);
    this.activeModal.close(this.perishablesItem);
  }

}
