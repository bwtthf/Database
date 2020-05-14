import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-or-edit-food-menu',
  templateUrl: './add-or-edit-food-menu.component.html',
  styleUrls: ['./add-or-edit-food-menu.component.scss']
})
export class AddOrEditFoodMenuComponent implements OnInit {
  @Input() public timeframe;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  submitForm() {
    this.passEntry.emit(this.timeframe);
    this.activeModal.close(this.timeframe);
  }
}
