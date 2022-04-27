import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/Auth/login/login.component';
import { RegistroUserComponent } from './Componentes/Auth/registro-user/registro-user.component';
import { HomeComponent } from './Componentes/Vistas/home/home.component';
import { MonitorComponent } from './Componentes/Vistas/monitor/monitor.component';
import { PartidasComponent } from './Componentes/Vistas/partidas/partidas.component';
import { SidebarComponent } from './Componentes/Vistas/sidebar/sidebar.component';
import { TokenGuardGuard } from './Guards/token-guard.guard';
import { UserGuardGuard } from './Guards/user-guard.guard';

const routes: Routes = [
    {path:'', redirectTo: '/login', pathMatch: 'full'},
    {path:'login', component: LoginComponent},
    {path:'home', component: HomeComponent, canActivate: [UserGuardGuard, TokenGuardGuard]},
    {path:'registrarse', component: RegistroUserComponent},

    {path:'sidebar', component: SidebarComponent},
    {path:'Partidas', component: PartidasComponent, canActivate: [UserGuardGuard, TokenGuardGuard]},
    {path: 'monitor/:monitor', component:MonitorComponent, canActivate: [UserGuardGuard, TokenGuardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
