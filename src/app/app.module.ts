import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http' 


import { AppComponent } from './app.component';
import { NavBarComponent } from './Componentes/Vistas/nav-bar/nav-bar.component';
import { DashboardComponent } from './Componentes/Vistas/dashboard/dashboard.component';
import { HomeComponent } from './Componentes/Vistas/home/home.component';
import { SidebarComponent } from './Componentes/Vistas/sidebar/sidebar.component';
import { LoginComponent } from './Componentes/Auth/login/login.component';

import { RegistroUserComponent } from './Componentes/Auth/registro-user/registro-user.component';
import { MonitorComponent } from './Componentes/Vistas/monitor/monitor.component';
import { PartidasComponent } from './Componentes/Vistas/partidas/partidas.component';
//import {BrowserAnimationsModule} from '@angular/animations'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './Guards/auth-interceptors';
import { IsLoggedGuardGuard } from './Guards/is-logged-guard.guard';
import { UserGuardGuard } from './Guards/user-guard.guard';

//  AppRoutingModule,ReactiveFormsModule, FormsModule,HttpClientModule,

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    HomeComponent,
    SidebarComponent,
    LoginComponent,
    RegistroUserComponent,
    MonitorComponent,
    PartidasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    AppRoutingModule,
    UserGuardGuard, 
    IsLoggedGuardGuard,
    {
      provide : HTTP_INTERCEPTORS, 
      useClass : AuthInterceptor, 
      multi : true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
