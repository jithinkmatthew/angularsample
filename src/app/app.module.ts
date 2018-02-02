import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonserverService } from './services/jsonserver.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';

const routers: Routes = [
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        LoginComponent,
        SignupComponent,
        AboutComponent,
        FeaturesComponent,
    ],
    imports: [
        HttpModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
    ],
    providers: [JsonserverService, AuthGuard, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
