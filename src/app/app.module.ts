import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SortPipe } from './sort.pipe';
import { EmpNameFilterPipe } from './emp-name-filter.pipe';
import { GenderFilterPipe } from './gender-filter.pipe';
import { GenderNameFilterPipe } from './gender-name-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SortPipe,
    EmpNameFilterPipe,
    GenderFilterPipe,
    GenderNameFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, EmployeeListComponent]
})
export class AppModule { }
