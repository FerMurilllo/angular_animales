import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http' 

import { AppComponent } from './app.component';
import { FormAnimalesComponent } from './Componentes/Formularios/form-animales/form-animales.component';
import { FormEspeciesComponent } from './Componentes/Formularios/form-especies/form-especies.component';
import { DashboardAdminComponent } from './Componentes/Vistas/dashboard-admin/dashboard-admin.component';
import { NavBarComponent } from './Componentes/Vistas/nav-bar/nav-bar.component';
import { FooterComponent } from './Componentes/Vistas/footer/footer.component';
import { DashboardComponent } from './Componentes/Vistas/dashboard/dashboard.component';
import { AboutComponent } from './Componentes/Vistas/about/about.component';
import { HomeComponent } from './Componentes/Vistas/home/home.component';
import { SidebarComponent } from './Componentes/Vistas/sidebar/sidebar.component';
import { AnimalesComponent } from './Componentes/Vistas/animales/animales.component';
import { MapaComponent } from './Componentes/Vistas/mapa/mapa.component';
import { RegistroUserComponent } from './Componentes/Auth/registro-user/registro-user.component';
import { LoginComponent } from './Componentes/Auth/login/login.component';


//  AppRoutingModule,ReactiveFormsModule, FormsModule,HttpClientModule,

@NgModule({
  declarations: [
    AppComponent,
    FormAnimalesComponent,
    FormEspeciesComponent,
    DashboardAdminComponent,
    NavBarComponent,
    FooterComponent,
    DashboardComponent,
    AboutComponent,
    HomeComponent,
    SidebarComponent,
    AnimalesComponent,
    MapaComponent,
    RegistroUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
