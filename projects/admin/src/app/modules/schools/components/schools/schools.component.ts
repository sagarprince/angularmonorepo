// Core
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lms-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchoolsComponent implements OnInit {

  constructor() { }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void { }
}
