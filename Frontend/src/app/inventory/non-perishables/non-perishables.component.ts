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
    this.nonPerishablesService.getAllNonPerishable().subscribe((data: any[]) => {
      // console.log(data);
      this.nonPerishablesItems = data;
    })
  }

  addRow() {
    const modalRef = this.modalService.open(NonPerishablesModalComponent);
    modalRef.componentInstance.nonPerishablesItem = this.nonPerishablesItem;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
        this.nonPerishablesService.postOneNonPerishableItem(this.nonPerishablesItem)
          .subscribe((data) => {
            // console.log(data);
            this.nonPerishablesService.getAllNonPerishable().subscribe((data: any[]) => {
              // console.log(data);
              this.nonPerishablesItems = data;
            })
          });
      }
    }, (reason) => {

    });
  }

  editRow(item_id: any) {
    console.log(item_id);
  }

  deleteRow(item_id: any) {
    console.log(item_id);
  }

}
