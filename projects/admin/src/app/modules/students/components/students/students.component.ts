// Core
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lms-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentsComponent implements OnInit {

  constructor() { }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void { }

}
