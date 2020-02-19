// Core
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lms-no-records-found',
  templateUrl: './no-records-found.component.html',
  styleUrls: ['./no-records-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoRecordsFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
