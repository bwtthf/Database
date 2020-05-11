import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbPanelChangeEvent, NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../../auth/auth.service';
import { PerishablesService } from '../services/perishables.service';

import { PerishablesModalComponent } from '../components/perishables-modal/perishables-modal.component';

@Component({
  selector: 'app-perishables',
  templateUrl: './perishables.component.html',
  styleUrls: ['./perishables.component.scss']
})
export class PerishablesComponent implements OnInit {

  @ViewChild('perishables_accordion', { static: true }) accordion: NgbAccordion;

  user: firebase.User;

  panelID: any;
  panelEventNextState: any;

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
      });
      this.perishablesService.sendAdvanceQueryRequest$.subscribe((data) => {
        if (this.panelEventNextState === true) {
          this.accordion.toggle(this.panelID);
        }
        this.perishablesItems = data;
      });
  }

  ngOnInit() {
    this.perishablesService.getAllPerishableItems().subscribe((data: any[]) => {
      // console.log(data);
      this.perishablesItems = data;
    });
  }

  addRow() {
    if (this.panelEventNextState === true) {
      this.accordion.toggle(this.panelID);
    }

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

  editRow(item_id: any) {
    if (this.panelEventNextState === true) {
      this.accordion.toggle(this.panelID);
    }

    this.perishablesItem = {
      "item_id": item_id,
      "total_price": '',
      "date_ordered": '',
      "date_received": '',
      "item": '',
      "quantity": '',
      "expiration_date": ''
    };

    this.perishablesService.getOnePerishableItem(this.perishablesItem).subscribe((data) => {

      this.perishablesItem.item_id = data[0].item_id;
      this.perishablesItem.total_price = data[0].total_price;
      if(data[0].date_ordered){
        this.perishablesItem.date_ordered = {
          "year": parseInt(data[0].date_ordered.split('-')[0]),
          "month": parseInt(data[0].date_ordered.split('-')[1]),
          "day": parseInt(data[0].date_ordered.split('-')[2]),
        };
      } else{
        this.perishablesItem.date_ordered = ''
      }
      if(data[0].date_received){
        this.perishablesItem.date_received = {
          "year": parseInt(data[0].date_received.split('-')[0]),
          "month": parseInt(data[0].date_received.split('-')[1]),
          "day": parseInt(data[0].date_received.split('-')[2]),
        };
      } else{
        this.perishablesItem.date_received = ''
      }
      
      this.perishablesItem.item = data[0].item;
      this.perishablesItem.quantity = data[0].quantity;

      if(data[0].expiration_date){
        this.perishablesItem.expiration_date = {
          "year": parseInt(data[0].expiration_date.split('-')[0]),
          "month": parseInt(data[0].expiration_date.split('-')[1]),
          "day": parseInt(data[0].expiration_date.split('-')[2]),
        };
      } else{
        this.perishablesItem.expiration_date = ''
      }

      const modalRef = this.modalService.open(PerishablesModalComponent);
      modalRef.componentInstance.perishablesItem = this.perishablesItem;
      modalRef.result.then((result) => {
        if (result) {
          // console.log(result);

          this.perishablesItem.item_id = result.item_id;
          this.perishablesItem.total_price = result.total_price;
          this.perishablesItem.date_ordered = result.date_ordered;
          this.perishablesItem.date_received = result.date_received;
          this.perishablesItem.item = result.item;
          this.perishablesItem.quantity = result.quantity;
          this.perishablesItem.expiration_date = result.expiration_date;

          this.perishablesService.updateOnePerishableItem(this.perishablesItem).subscribe((data) => {
            this.perishablesItem.item_id = '';
            this.perishablesItem.total_price = '';
            this.perishablesItem.date_ordered = '';
            this.perishablesItem.date_received = '';
            this.perishablesItem.item = '';
            this.perishablesItem.quantity = '';
            this.perishablesItem.expiration_date = '';

            // console.log(this.perishablesItem);
            this.perishablesService.getAllPerishableItems().subscribe((data: any[]) => {
              // console.log(data);
              this.perishablesItems = data;
            })
          });
        }
      }, (reason) => {

      });
    });
  }

  deleteRow(item_id: any) {
    if (this.panelEventNextState === true) {
      this.accordion.toggle(this.panelID);
    }

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

  detectPanelChange($event: NgbPanelChangeEvent) {
    // console.log($event);
    this.panelID = $event.panelId;
    this.panelEventNextState = $event.nextState;
  }

}
