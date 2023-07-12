import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { IssueListComponent } from './issue-list/issue-list.component';

import { ReactiveFormsModule } from '@angular/forms';
import { IssuesReportComponent } from './issues-report/issues-report.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssuesReportComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
