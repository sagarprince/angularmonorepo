import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() variant: string = 'raised'; // raised | stroked | icon | icon-non-fab
  @Input() type: string = 'submit' // submit | button
  @Input() name: string = '';
  @Input() iconType: string = 'fa'; // fa | material
  @Input() icon: string = '';
  @Input() disabled: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() color: string = 'primary';
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void { }

  /**
   * OnClick
   * @return void
   */
  public _onClick(): void {
    this.onClick.emit();
  }
}
