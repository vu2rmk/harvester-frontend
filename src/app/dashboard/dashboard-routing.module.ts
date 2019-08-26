import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { CustomerInfoComponent } from '../customer-info/components/customer-info.component';
import { CustomerInfoFormComponent } from '../customer-info/components/customer-info-form/customer-info-form.component';


const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'customer-info',
        component: CustomerInfoComponent
      },
      {
        path: 'customer-info/new',
        component: CustomerInfoFormComponent
      },
      {
        path: 'customer-info/:id',
        component: CustomerInfoFormComponent
      },
      {
        path: '**',
        component: DashboardContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
