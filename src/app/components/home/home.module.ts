import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditinfoComponent } from './editinfo/editinfo.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
      EditinfoComponent,
      DashboardComponent,
      HomeComponent
  ]
})
export class HomeModule { }
