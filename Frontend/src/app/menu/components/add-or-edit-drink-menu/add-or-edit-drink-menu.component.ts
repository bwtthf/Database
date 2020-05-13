import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

import { AuthService } from '../../../auth/auth.service';
import { AddOrEditDrinkMenuService } from '../../services/add-or-edit-drink-menu.service';

@Component({
  selector: 'app-add-or-edit-drink-menu',
  templateUrl: './add-or-edit-drink-menu.component.html',
  styleUrls: ['./add-or-edit-drink-menu.component.scss']
})
export class AddOrEditDrinkMenuComponent implements OnInit {

  user: firebase.User;

  addOrEditDrinkMenuForm;

  categories: any;
  alcoholic_true_false: any = ['True', 'False'];

  drink_id: any;

  constructor(
    private addOrEditDrinkMenuService: AddOrEditDrinkMenuService,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
        if (this.user === undefined || this.user === null) {
          this.router.navigate(['/login']);
        }
      });
    this.addOrEditDrinkMenuForm = this.formBuilder.group({
      drink_id: null,
      drink_name: null,
      drink_category: null,
      drink_price: null,
      date_active_start: null,
      date_active_end: null,
      alcoholic: null
    });
  }

  ngOnInit() {
    this.addOrEditDrinkMenuService.getAllDistinctDrinkCatogories().subscribe((data: any[]) => {
      // console.log(data);
      this.categories = [];
      data.forEach((element) => {
        this.categories.push(element.drink_category);
      });
      this.addOrEditDrinkMenuForm.controls['drink_category'].setValue('');
      this.addOrEditDrinkMenuForm.controls['alcoholic'].setValue('');
    });
    this.route.params.subscribe((params) => {
      this.drink_id = params.drink_id;
      if (this.drink_id != null && this.drink_id != undefined && this.drink_id != '') {
        this.addOrEditDrinkMenuService.getDrinkByDrinkId({ "drink_id": this.drink_id }).subscribe((data) => {
          // console.log(data);
          this.addOrEditDrinkMenuForm.controls['drink_name'].setValue(data[0].drink_name);
          this.addOrEditDrinkMenuForm.controls['drink_category'].setValue(data[0].drink_category);
          this.addOrEditDrinkMenuForm.controls['drink_price'].setValue(data[0].drink_price);
          this.addOrEditDrinkMenuForm.controls['date_active_start'].setValue(data[0].date_active_start);
          this.addOrEditDrinkMenuForm.controls['date_active_end'].setValue(data[0].date_active_end);
          this.addOrEditDrinkMenuForm.controls['alcoholic'].setValue((data[0].alcoholic === false) ? 'False' : 'True');
        });
      }
    });
  }

  onSubmit(drinkMenuItemInfo) {
    if (this.drink_id != null && this.drink_id != undefined && this.drink_id != '') {
      drinkMenuItemInfo.drink_id = this.drink_id;
    }
    // console.log(drinkMenuItemInfo);
    this.addOrEditDrinkMenuService.addOrUpdateItemToDrinkMenu(drinkMenuItemInfo).subscribe((data) => {
      // console.log(data);
    });
    this.addOrEditDrinkMenuForm.reset();
    this.location.back();
  }

  cancel($event) {
    $event.preventDefault()
    this.location.back();
  }

}
