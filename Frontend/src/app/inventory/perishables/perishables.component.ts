import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../../auth/auth.service';
import { PerishablesService } from '../services/perishables.service';
import { PerishablesModalComponent } from '../components/perishables-modal/perishables-modal.component';

@Component({
  selector: 'app-perishables',
  templateUrl: './perishables.component.html',
  styleUrls: ['./perishables.component.scss']
})
export class PerishablesComponent implements OnInit {

  user: firebase.User;

  perishablesItem: any;

  perishablesItems = [];

  constructor(
    public modalService: NgbModal,
    private perishablesService: PerishablesService,
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
    this.perishablesService.getAllPerishableItems().subscribe((data: any[]) => {
      // console.log(data);
      this.perishablesItems = data;
    });
  }

  addRow() {
    this.perishablesItem = {
      "item_id": '',
      "total_price": '',
      "date_ordered": '',
      "date_received": '',
      "item": '',
      "quantity": '',
      "expiration_date": ''
    };

    const modalRef = this.modalService.open(PerishablesModalComponent);
    modalRef.componentInstance.perishablesItem = this.perishablesItem;
    modalRef.result.then((result) => {
      if (result) {
        // console.log(result);
        this.perishablesService.postOnePerishableItem(this.perishablesItem)
          .subscribe((data) => {

            this.perishablesItem.item_id = '';
            this.perishablesItem.total_price = '';
            this.perishablesItem.date_ordered = '';
            this.perishablesItem.date_received = '';
            this.perishablesItem.item = '';
            this.perishablesItem.quantity = '';
            this.perishablesItem.expiration_date = '';

            this.perishablesService.getAllPerishableItems().subscribe((data: any[]) => {
              // console.log(data);
              this.perishablesItems = data;
            });


          });
      }
    }, (reason) => {

    });
  }

  editRow(item_id: any) {}

  deleteRow(item_id: any) {
    this.perishablesItem = {
      "item_id": item_id,
      "total_price": '',
      "date_ordered": '',
      "date_received": '',
      "item": '',
      "quantity": '',
      "expiration_date": ''
    };

    this.perishablesService.deleteOnePerishableItem(this.perishablesItem).subscribe((data) => {

      this.perishablesItem.item_id = '';
      this.perishablesItem.total_price = '';
      this.perishablesItem.date_ordered = '';
      this.perishablesItem.date_received = '';
      this.perishablesItem.item = '';
      this.perishablesItem.quantity = '';
      this.perishablesItem.expiration_date = '';

      this.perishablesService.getAllPerishableItems().subscribe((data: any[]) => {
        this.perishablesItems = data;
      })
    });
  }

}
