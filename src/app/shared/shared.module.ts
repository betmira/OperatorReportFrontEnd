import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownComponent} from './dropdown/dropdown.component';
import {SearchButtonComponent} from './search-button/search-button.component';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DatePickerStartEndComponent } from './date-picker-start-end/date-picker-start-end.component';
import { DateFormatPipe } from './date-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  declarations: [DropdownComponent, SearchButtonComponent, DatePickerStartEndComponent, DateFormatPipe],
  exports: [DropdownComponent, SearchButtonComponent, DatePickerStartEndComponent]
})
export class SharedModule { }
