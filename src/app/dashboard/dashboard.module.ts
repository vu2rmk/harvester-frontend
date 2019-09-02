import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard.component';
import { MaterialModule } from '../shared/material.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { CustomerInfoModule } from '../customer-info/customer-info.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from '../core/services/http-interceptor.service';


@NgModule({
  declarations: [DashboardComponent, DashboardMainComponent, DashboardContentComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CustomerInfoModule,
    MaterialModule,
    NgbModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
  }]
})
export class DashboardModule { }
