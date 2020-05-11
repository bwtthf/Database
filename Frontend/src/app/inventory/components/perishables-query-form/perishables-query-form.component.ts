import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PerishablesService } from '../../services/perishables.service';

@Component({
  selector: 'app-perishables-query-form',
  templateUrl: './perishables-query-form.component.html',
  styleUrls: ['./perishables-query-form.component.scss']
})
export class PerishablesQueryFormComponent implements OnInit {

  perishablesQueryForm;

  constructor(
    private formBuilder: FormBuilder,
    private perishablesService: PerishablesService,
  ) {
    this.perishablesQueryForm = this.formBuilder.group({
      item: '',
      date_ordered_start: '',
      date_ordered_stop: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(perishablesQueryInfo) {
    // console.log(perishablesQueryInfo);
    this.perishablesService.sendAdvanceQueryRequest(perishablesQueryInfo);
    this.perishablesQueryForm.reset();
  }

}
