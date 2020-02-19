// Core
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'lms-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtpComponent implements OnInit {
  email: string = '';

  constructor() { }

  /**
   * ngOnInit
   * @return void
   */
  ngOnInit(): void {

  }
}
