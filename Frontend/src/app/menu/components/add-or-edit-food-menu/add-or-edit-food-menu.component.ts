import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-add-or-edit-food-menu',
  templateUrl: './add-or-edit-food-menu.component.html',
  styleUrls: ['./add-or-edit-food-menu.component.scss']
})
export class AddOrEditFoodMenuComponent implements OnInit {
  //@Input() public timeframe;
  //@Output() passEntry: EventEmitter<any> = new EventEmitter();
  addOrEditFoodMenuForm

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) {

    this.addOrEditFoodMenuForm = this.formBuilder.group({
      date_active_start: null,
      date_active_end: null
    });
  }

  ngOnInit() { }

  //submitForm() {
  //  this.passEntry.emit(this.timeframe);
  // this.activeModal.close(this.timeframe);
  //}

  onSubmit(foodMenuItemInfo) {
    //console.log(foodMenuItemInfo);
    this.router.navigate(['foodmenu', foodMenuItemInfo]);

  }

  cancel($event) {
    $event.preventDefault()
    this.location.back();
  }


  }






