import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '',redirectTo:'Login',pathMatch:'full'},
  {path: 'Login',component: LoginComponent},
  {path:'dashboard',loadChildren: ()=> import('./components/dashboard/dashboard.module').then(x => x.DashboardModule)},
  {path: '**',redirectTo:'Login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
