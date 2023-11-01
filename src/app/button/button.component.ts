import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  /**
   * Button Properties
   */
  @Input() type?: 'default' | 'link' | 'outlined' = 'default';
  @Input() disabled?: boolean = false;
  @Input() text!: string;

  /**
   * Icon Directions
   */
  @Input() rightIconPath?: string;
  @Input() leftIconPath?: string;

  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();

  onClickHandler() {
    this.clickEvent.emit();
  }
}
