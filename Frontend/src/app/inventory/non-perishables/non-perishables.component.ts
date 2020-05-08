import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { NonPerishablesService } from '../services/non-perishables.service';

@Component({
  selector: 'app-non-perishables',
  templateUrl: './non-perishables.component.html',
  styleUrls: ['./non-perishables.component.scss']
})
export class NonPerishablesComponent implements OnInit {

  user: firebase.User;

  nonPerishablesItems = [];

  constructor(
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
    this.nonPerishablesService.sendGetRequest().subscribe((data: any[]) => {
      // console.log(data);
      this.nonPerishablesItems = data;
    })
  }

}
