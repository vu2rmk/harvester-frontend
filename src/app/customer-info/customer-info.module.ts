import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerInfoComponent } from './components/customer-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomerInfoService } from './services/customer-info.service';
import { CustomerInfoFormComponent } from './components/customer-info-form/customer-info-form.component';



@NgModule({
  declarations: [CustomerInfoComponent, CustomerInfoFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [CustomerInfoComponent],
  providers: [CustomerInfoService]
})
export class CustomerInfoModule { }
