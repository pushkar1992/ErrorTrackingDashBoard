import { HashLocationStrategy, LocationStrategy, CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardService } from './core/services/dashboard.service';
import { AdminComponent } from './layout/admin/admin.component';
import { MenuItems } from './shared/menu-items/menu-items';
import { SharedModule } from './shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { DefaultComponent } from './pages/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DefaultComponent
  ],
  imports: [ 
    CommonModule,
    ChartModule,
    NgxDatatableModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    MenuItems,
    DashboardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
