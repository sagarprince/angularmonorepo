// Core
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lms-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TutorsComponent implements OnInit {

  constructor() { }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void { }

}
