import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {OperatorReportModule} from './operator-report/operator-report.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OperatorReportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
