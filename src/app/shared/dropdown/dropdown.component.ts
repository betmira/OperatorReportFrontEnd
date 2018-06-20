import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {  @Input() placeholder: string;


  @Output() selectedOption = new EventEmitter();
  @Input() options;
  @Input() dropDownTitle;

  private _dropDownTitle;

  select(item) {
    if (item) {
      this.dropDownTitle = item.name;
    } else {
      this.dropDownTitle = this._dropDownTitle;
    }
    this.selectedOption.emit(item);
  }


  constructor() {
  }

  ngOnInit() {
    this._dropDownTitle = this.dropDownTitle;
  }

}
