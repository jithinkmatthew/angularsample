import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditinfoComponent } from './editinfo/editinfo.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'editinfo',
                component: EditinfoComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
