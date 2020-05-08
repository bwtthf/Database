import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-non-perishables-modal',
  templateUrl: './non-perishables-modal.component.html',
  styleUrls: ['./non-perishables-modal.component.scss']
})
export class NonPerishablesModalComponent implements OnInit {

  @Input() public nonPerishablesItem;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    // console.log(this.nonPerishablesItem);
  }

  submitForm() {
    this.passEntry.emit(this.nonPerishablesItem);
    this.activeModal.close(this.nonPerishablesItem);
  }

}
