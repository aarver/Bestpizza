import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GyrosComponent } from './gyros/gyros.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PalacsintaComponent } from './palacsinta/palacsinta.component';
import { PizzaComponent } from './pizza/pizza.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pizza', component: PizzaComponent},
  {path: 'hamburger', component: HamburgerComponent},
  {path: 'gyros', component: GyrosComponent},
  {path: 'palacsinta', component: PalacsintaComponent},
  {path: 'main', component: MainComponent},
  {path: '**', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
