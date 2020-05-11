import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NonPerishablesService } from '../../services/non-perishables.service';

@Component({
  selector: 'app-non-perishables-query-form',
  templateUrl: './non-perishables-query-form.component.html',
  styleUrls: ['./non-perishables-query-form.component.scss']
})
export class NonPerishablesQueryFormComponent implements OnInit {

  nonPerishablesQueryForm;

  constructor(
    private formBuilder: FormBuilder,
    private nonPerishablesService: NonPerishablesService,
  ) {
    this.nonPerishablesQueryForm = this.formBuilder.group({
      item: '',
      date_ordered_start: '',
      date_ordered_stop: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(nonPerishablesQueryInfo) {
    // console.log(nonPerishablesQueryInfo);
    this.nonPerishablesService.sendAdvanceQueryRequest(nonPerishablesQueryInfo);
    this.nonPerishablesQueryForm.reset();
  }

}
