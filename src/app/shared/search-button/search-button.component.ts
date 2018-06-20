import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss']
})
export class SearchButtonComponent implements OnInit {

  @Output() searcheClicked = new EventEmitter();

  search() {
    this.searcheClicked.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
