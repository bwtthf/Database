import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../../auth/auth.service';
import { NonPerishablesService } from '../services/non-perishables.service';
import { NonPerishablesModalComponent } from '../components/non-perishables-modal/non-perishables-modal.component';

@Component({
  selector: 'app-non-perishables',
  templateUrl: './non-perishables.component.html',
  styleUrls: ['./non-perishables.component.scss']
})
export class NonPerishablesComponent implements OnInit {

  user: firebase.User;

  nonPerishablesItem = {
    "item_id": '',
    "total_price": '',
    "date_ordered": '',
    "date_received": '',
    "item": '',
    "condition": ''
  };

  nonPerishablesItems = [];

  constructor(
    public modalService: NgbModal,
    private nonPerishablesService: NonPerishablesService,
    private auth: AuthService,
    private router: Router
  ) {
    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
        if (this.user === undefined || this.user === null) {
          this.router.navigate(['/login']);
        }
      })
  }

  ngOnInit() {
    this.nonPerishablesService.getAllNonPerishableItems().subscribe((data: any[]) => {
      // console.log(data);
      this.nonPerishablesItems = data;
    });
  }

  addRow() {
    const modalRef = this.modalService.open(NonPerishablesModalComponent);
    modalRef.componentInstance.nonPerishablesItem = this.nonPerishablesItem;
    modalRef.result.then((result) => {
      if (result) {
        // console.log(result);
        this.nonPerishablesService.postOneNonPerishableItem(this.nonPerishablesItem)
          .subscribe((data) => {

            this.nonPerishablesItem.item_id = '';
            this.nonPerishablesItem.total_price = '';
            this.nonPerishablesItem.date_ordered = '';
            this.nonPerishablesItem.date_received = '';
            this.nonPerishablesItem.item = '';
            this.nonPerishablesItem.condition = '';

            // console.log(this.nonPerishablesItem);
            this.nonPerishablesService.getAllNonPerishableItems().subscribe((data: any[]) => {
              // console.log(data);
              this.nonPerishablesItems = data;
            })
          });
      }
    }, (reason) => {

    });
  }

  editRow(item_id: any) {
    this.nonPerishablesItem.item_id = item_id;
    // console.log(this.nonPerishablesItem);

    this.nonPerishablesService.getOneNonPerishableItem(this.nonPerishablesItem).subscribe((data) => {

      this.nonPerishablesItem.item_id = data[0].item_id;
      this.nonPerishablesItem.total_price = data[0].total_price;
      this.nonPerishablesItem.date_ordered = data[0].date_ordered;
      this.nonPerishablesItem.date_received = data[0].date_received;
      this.nonPerishablesItem.item = data[0].item;
      this.nonPerishablesItem.condition = data[0].condition;

      const modalRef = this.modalService.open(NonPerishablesModalComponent);
      modalRef.componentInstance.nonPerishablesItem = this.nonPerishablesItem;
      modalRef.result.then((result) => {
        if (result) {
          // console.log(result);

          this.nonPerishablesItem.item_id = result.item_id;
          this.nonPerishablesItem.total_price = result.total_price;
          this.nonPerishablesItem.date_ordered = result.date_ordered;
          this.nonPerishablesItem.date_received = result.date_received;
          this.nonPerishablesItem.item = result.item;
          this.nonPerishablesItem.condition = result.condition;

          this.nonPerishablesService.updateOneNonPerishableItem(this.nonPerishablesItem).subscribe((data) => {
            this.nonPerishablesItem.item_id = '';
            this.nonPerishablesItem.total_price = '';
            this.nonPerishablesItem.date_ordered = '';
            this.nonPerishablesItem.date_received = '';
            this.nonPerishablesItem.item = '';
            this.nonPerishablesItem.condition = '';

            // console.log(this.nonPerishablesItem);
            this.nonPerishablesService.getAllNonPerishableItems().subscribe((data: any[]) => {
              // console.log(data);
              this.nonPerishablesItems = data;
            })
          });
        }
      }, (reason) => {

      });
    });
  }

  deleteRow(item_id: any) {
    this.nonPerishablesItem.item_id = item_id;
    // console.log(this.nonPerishablesItem);

    this.nonPerishablesService.deleteOneNonPerishableItem(this.nonPerishablesItem).subscribe((data) => {

      this.nonPerishablesItem.item_id = '';
      this.nonPerishablesItem.total_price = '';
      this.nonPerishablesItem.date_ordered = '';
      this.nonPerishablesItem.date_received = '';
      this.nonPerishablesItem.item = '';
      this.nonPerishablesItem.condition = '';

      // console.log(this.nonPerishablesItem);
      this.nonPerishablesService.getAllNonPerishableItems().subscribe((data: any[]) => {
        // console.log(data);
        this.nonPerishablesItems = data;
      })
    });
  }

}
