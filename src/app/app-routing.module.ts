import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'features',
        component: FeaturesComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {   path: 'home',
        loadChildren: './components/home/home.module#HomeModule',
        canActivate: [AuthGuard]
    },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule {}
