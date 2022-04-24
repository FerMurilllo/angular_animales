import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/Auth/login/login.component';
import { RegistroUserComponent } from './Componentes/Auth/registro-user/registro-user.component';
import { CrearAnimalComponent } from './Componentes/Formularios/crear-animal/crear-animal.component';
import { CrearEspecieComponent } from './Componentes/Formularios/crear-especie/crear-especie.component';
import { EspecieformComponent } from './Componentes/Formularios/especieform/especieform.component';
import { FormAnimalesComponent } from './Componentes/Formularios/form-animales/form-animales.component';
import { FormEspeciesComponent } from './Componentes/Formularios/form-especies/form-especies.component';
import { AboutComponent } from './Componentes/Vistas/about/about.component';
import { AnimalesComponent } from './Componentes/Vistas/animales/animales.component';
import { HomeComponent } from './Componentes/Vistas/home/home.component';
import { MapaComponent } from './Componentes/Vistas/mapa/mapa.component';
import { SidebarComponent } from './Componentes/Vistas/sidebar/sidebar.component';


const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'animales', component: AnimalesComponent},
  
    {path:'mapa', component:MapaComponent},
    {path:'registro-user', component: RegistroUserComponent},
    {path:'login', component: LoginComponent},
    {path: 'form-animales', component: FormAnimalesComponent},
    {path:'form-especies', component: FormEspeciesComponent},

    //*********E D I T A R   V I S T A S */
    {path: 'Editar/Especie/:id', component: EspecieformComponent},
    {path: 'Editar/Animal/:id', component: FormAnimalesComponent},

    //crear
    {path: 'crearEspecie', component: CrearEspecieComponent},
    {path:'crearAnimal', component: CrearAnimalComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
